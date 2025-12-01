from uuid import uuid4

import jwt
from authentication.auth import get_current_user
from db.data.db.db import get_db
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from models.user import CreateUser, ReadUser
from sqlalchemy.orm import Session
from tables.user import User, UserRole

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

router = APIRouter()


@router.post("/item/", response_model=ReadUser)
def create_item(
    user: CreateUser,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    db_user = User(
        id=uuid4(),
        name=user.name,
        username=user.username,
        email=user.email,
        role=UserRole(user.role),
        password=user.password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@router.get("/item/{user_id}", response_model=ReadUser)
def get_item(
    user_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    return db.query(User).filter(User.id == user_id).first()


@router.get("/list/", response_model=list[ReadUser])
def get_list(
    db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)
):
    return db.query(User).all()


@router.put("/item/{user_id}", response_model=ReadUser)
def update_item(
    user_id: str,
    user: CreateUser,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
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
def delete_item(
    user_id: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    db.query(User).filter(User.id == user_id).delete()
    db.commit()
    return {"status": "201", "message": "User deleted successfully"}


@router.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if form_data.username != "admin" or form_data.password != "123":
        print(form_data.username, "form_data.username")
        raise HTTPException(status_code=400, detail="Incorrect credentials")

    access_token = jwt.encode(
        {"sub": form_data.username}, SECRET_KEY, algorithm=ALGORITHM
    )
    print(access_token, "access_token")
    return {"access_token": access_token, "token_type": "bearer"}
