from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID, uuid4
from typing import List
from db.data.db.db import get_db
from models.farmer import FarmerCreate, FarmerRead
from tables.crops import Crop
from tables.farmer import Farmer

router = APIRouter()


@router.post("/item/", response_model=FarmerRead)
def create_farmer(farmer: FarmerCreate, db: Session = Depends(get_db)):
    new_farmer = Farmer(
        id=uuid4(),
        name=farmer.name,
        age=farmer.age,
        location=farmer.location,
        land=farmer.land
    )
    db.add(new_farmer)
    db.commit()
    db.refresh(new_farmer)
    return new_farmer


@router.get("/item/{farmer_id}", response_model=FarmerRead)
def get_item(farmer_id: UUID, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")
    return farmer


@router.get("/list/", response_model=List[FarmerRead])
def get_list(db: Session = Depends(get_db)):
    return db.query(Farmer).all()


@router.put("/item/{farmer_id}/", response_model=FarmerRead)
def update_farmer(farmer_id: UUID, farmer_data: FarmerCreate, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")

    farmer.name = farmer_data.name
    farmer.age = farmer_data.age
    farmer.location = farmer_data.location
    farmer.land = farmer_data.land
    db.commit()
    db.refresh(farmer)
    return farmer


@router.delete("/item/{farmer_id}/")
def delete_farmer(farmer_id: UUID, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")

    db.delete(farmer)
    db.commit()
    return {"message": "Farmer deleted successfully"}


@router.post("/farmers/{farmer_id}/crops", response_model=List[str])
def add_crops_to_farmer(farmer_id: UUID, crop_ids: List[UUID], db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")

    crops = db.query(Crop).filter(Crop.id.in_(crop_ids)).all()
    if not crops:
        raise HTTPException(status_code=404, detail="No valid crops found")

    farmer.crops.extend(crops)
    db.commit()
    return [crop.crop_name for crop in crops]


@router.get("/farmers/{farmer_id}/crops", response_model=List[str])
def get_farmer_crops(farmer_id: UUID, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")

    crop_names = [crop.crop_name for crop in farmer.crops]
    return crop_names
