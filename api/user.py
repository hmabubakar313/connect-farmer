from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db.data.db.db import get_db
from models.user import CreateUser, ReadUser
from tables.user import UserRole
from uuid import uuid4
from tables.user import User


router = APIRouter()


@router.post("/item/", response_model=ReadUser)
def create_item(user: CreateUser, db: Session = Depends(get_db)):
    db_user = User(id=uuid4(), name=user.name, username=user.username, email=user.email, role=UserRole(user.role), password=user.password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

@router.get("/item/{user_id}", response_model=ReadUser)
def get_item(user_id: str, db: Session = Depends(get_db)):
    return db.query(User).filter(User.id == user_id).first()


@router.get("/list/", response_model=list[ReadUser])
def get_list(db: Session = Depends(get_db)):
    return db.query(User).all()

@router.put("/item/{user_id}", response_model=ReadUser)
def update_item(user_id: str, user: CreateUser, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.id == user_id).first()
    db_user.name = user.name
    db_user.username = user.username
    db_user.email = user.email
    db_user.role = UserRole(user.role)
    db_user.password = user.password
    db.commit()
    db.refresh(db_user)
    return db_user

@router.delete("/item/{user_id}")
def delete_item(user_id: str, db: Session = Depends(get_db)):
    db.query(User).filter(User.id == user_id).delete()
    db.commit()
    return {"status": "201", "message": "User deleted successfully"}