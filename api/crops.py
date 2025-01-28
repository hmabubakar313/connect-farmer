from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from tables.farmer import Farmer as FarmerTable
from db.data.db.db import get_db
from models.crops import CreateCrop, ReadCrop
from uuid import uuid4
from tables.crops import Crop

router = APIRouter()


@router.post("/item/", response_model=ReadCrop)
def create_item(crop: CreateCrop, db: Session = Depends(get_db)):
    new_item = Crop(
        id=uuid4(),
        crop_name=crop.crop_name,
        crops_type=crop.crops_type,
        crops_quantity=crop.crops_quantity,
        crops_price=crop.crops_price,
        crops_quality=crop.crops_quality,
        crops_location=crop.crops_location,
        crops_farmer=crop.crops_farmer
    )
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item


@router.get("/item/{crop_id}", response_model=ReadCrop)
def get_item(crop_id: str, db: Session = Depends(get_db)):
    return db.query(Crop).filter(Crop.id == crop_id).first()


@router.get("/list/")
def get_list(db: Session = Depends(get_db)):
    return db.query(Crop).all()


@router.put("/item/{crop_id}/", response_model=ReadCrop)
def update_item(crop_id: str, crop: CreateCrop, db: Session = Depends(get_db)):
    crop = db.query(Crop).filter(Crop.id == crop_id).first()
    crop.crop_name = crop.crop_name
    crop.crops_type = crop.crops_type
    crop.crops_quantity = crop.crops_quantity
    crop.crops_price = crop.crops_price
    crop.crops_quality = crop.crops_quality
    crop.crops_location = crop.crops_location
    crop.crops_farmer = crop.crops_farmer
    db.commit()
    db.refresh(crop)
    return crop
