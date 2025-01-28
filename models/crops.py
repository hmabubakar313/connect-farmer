from pydantic import BaseModel
from uuid import UUID
from typing import Optional, List


class CreateCrop(BaseModel):
    id: UUID
    crop_name: str
    crops_type: str
    crops_quantity: float
    crops_price: float
    crops_quality: str
    crops_location: str
    crops_farmer: UUID
    crops_farmer: UUID


class ReadCrop(BaseModel):
    id: UUID
    crop_name: str
    crops_type: str
    crops_quantity: float
    crops_price: float
    crops_quality: str
    crops_location: str
    crops_date: str
    crops_farmer: UUID

    class Config:
        orm_mode = True