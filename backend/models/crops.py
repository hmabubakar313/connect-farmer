from datetime import datetime
from typing import List, Optional
from uuid import UUID

from pydantic import BaseModel


class CreateCrop(BaseModel):
    id: UUID
    crop_name: str
    crops_type: str
    crops_quantity: float
    crops_price: float
    crops_quality: str
    crops_location: str
    crops_date: datetime
    crops_farmer: UUID

    class Config:
        orm_mode = True


class ReadCrop(BaseModel):
    id: UUID
    crop_name: str
    crops_type: str
    crops_quantity: float
    crops_price: float
    crops_quality: str
    crops_location: str
    crops_date: datetime
    crops_farmer: UUID

    class Config:
        orm_mode = True


class CreateFarmer(BaseModel):
    id: UUID
    name: str
    location: Optional[str] = None

    class Config:
        orm_mode = True


class ReadFarmer(BaseModel):
    id: UUID
    name: str
    location: Optional[str] = None
    crops: List[ReadCrop] = []

    class Config:
        orm_mode = True
