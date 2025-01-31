from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from uuid import UUID, uuid4
from typing import List
from db.data.db.db import get_db
from models.farmer import FarmerCreate, FarmerRead, FarmerWithCrops, FarmerWithCropsResponse 
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

    crop_names = farmer.crops
    crops = []
    for crop_name in crop_names:
        crop = db.query(Crop).filter(Crop.crop_name == crop_name).first()

        if not crop:
            crop = Crop(
                crop_name=crop_name,
                crops_type=" ",
                crops_quantity=0,
                crops_price=0.0,
                crops_quality=" ",
                crops_location=" ",
                crops_farmer=new_farmer.id
            )
            db.add(crop)
            db.commit()
            db.refresh(crop)

        crops.append(crop)

    new_farmer.crops.extend(crops)
    db.commit()

    crop_names = [crop.crop_name for crop in crops]
    return FarmerRead(
        id=new_farmer.id,
        name=new_farmer.name,
        age=new_farmer.age,
        location=new_farmer.location,
        land=new_farmer.land,
        crops=crop_names
    )


@router.get("/item/{farmer_id}", response_model=FarmerRead)
def get_item(farmer_id: UUID, db: Session = Depends(get_db)):
    farmer = db.query(Farmer).filter(Farmer.id == farmer_id).first()
    if not farmer:
        raise HTTPException(status_code=404, detail="Farmer not found")
    return farmer


@router.get("/list/", response_model=List[FarmerRead])
def get_list(db: Session = Depends(get_db)):
    farmers = db.query(Farmer).all()
    for farmer in farmers:
        farmer.crops = [crop.crop_name for crop in farmer.crops]
    return farmers


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
