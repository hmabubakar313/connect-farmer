from authentication.auth import get_current_user
from db.data.db.db import get_db
from fastapi import APIRouter, Depends, HTTPException
from models.vendor import CreateVendor, ReadVendor
from sqlalchemy.orm import Session
from tables.vendor import Vendor

router = APIRouter()


@router.get("/list/", response_model=list[ReadVendor])
def get_list(
    db: Session = Depends(get_db), current_user: dict = Depends(get_current_user)
):
    return db.query(Vendor).all()


@router.get("/item", response_model=ReadVendor)
def get_item(
    uuid: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    item = db.query(Vendor).filter(Vendor.id == uuid).first()
    return item


@router.post("/items", response_model=list[CreateVendor])
def create_items(
    items: list[CreateVendor], current_user: dict = Depends(get_current_user)
):
    return items


@router.put("/item/{user_id}", response_model=ReadVendor)
def update_item(
    user_id: str,
    user: CreateVendor,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    db_user = db.query(Vendor).filter(Vendor.id == user_id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="Vendor not found")

    update_data = user.dict(exclude_unset=True)  # Extract only provided fields
    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.commit()
    db.refresh(db_user)  # Ensures updated data is fetched from DB
    return db_user  # Should now return the updated data


@router.delete("/item/{uuid}")
def delete_item(
    uuid: str,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user),
):
    item = db.query(Vendor).filter(Vendor.id == uuid).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    db.delete(item)
    db.commit()
    return {"detail": "Item deleted successfully"}
