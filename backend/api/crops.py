from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID, uuid4
from typing import List

from tables.crops import Crop
from tables.farmer import Farmer
from db.data.db.db import get_db
from models.crops import CreateCrop, ReadCrop

router = APIRouter()


@router.post("/item/", response_model=ReadCrop)
def create_item(crop: CreateCrop, db: Session = Depends(get_db)):
    new_crop = Crop(
        id=uuid4(),
        crop_name=crop.crop_name,
        crops_type=crop.crops_type,
        crops_quantity=crop.crops_quantity,
        crops_price=crop.crops_price,
        crops_quality=crop.crops_quality,
        crops_location=crop.crops_location,
        crops_farmer=crop.crops_farmer
    )
    db.add(new_crop)
    db.commit()
    db.refresh(new_crop)
    return new_crop


@router.get("/item/{crop_id}", response_model=ReadCrop)
def get_item(crop_id: UUID, db: Session = Depends(get_db)):
    crop = db.query(Crop).filter(Crop.id == crop_id).first()
    if not crop:
        raise HTTPException(status_code=404, detail="Crop not found")
    return crop

@router.get("/list/", response_model=List[ReadCrop])
def get_list(db: Session = Depends(get_db)):
    crops = db.query(Crop).all()
    return [ReadCrop.model_validate(crop, from_attributes=True) for crop in crops]


@router.put("/item/{crop_id}/", response_model=ReadCrop)
def update_item(crop_id: UUID, crop_data: CreateCrop, db: Session = Depends(get_db)):
    crop = db.query(Crop).filter(Crop.id == crop_id).first()
    if not crop:
        raise HTTPException(status_code=404, detail="Crop not found")

    farmer = db.query(Farmer).filter(Farmer.id == crop_data.crops_farmer).first()
    if not farmer:
        raise HTTPException(status_code=400, detail="Invalid farmer ID")

    crop.crop_name = crop_data.crop_name
    crop.crops_type = crop_data.crops_type
    crop.crops_quantity = crop_data.crops_quantity
    crop.crops_price = crop_data.crops_price
    crop.crops_quality = crop_data.crops_quality
    crop.crops_location = crop_data.crops_location
    crop.crops_farmer = crop_data.crops_farmer

    db.commit()
    db.refresh(crop)
    return crop
