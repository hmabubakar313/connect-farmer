from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from tables.farmer import Farmer as FarmerTable  # SQLAlchemy model
from db.data.db.db import get_db
from models.farm import FarmerCreate, FarmerRead
from uuid import uuid4
from tables.crops import Crop

router = APIRouter()


@router.post("/farmers/", response_model=FarmerRead)
def create_farmer(farmer: FarmerCreate, db: Session = Depends(get_db)):
    new_farmer = FarmerTable(
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
