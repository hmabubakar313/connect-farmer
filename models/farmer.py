from pydantic import BaseModel
from uuid import UUID
from typing import Optional, List


class FarmerCreate(BaseModel):
    name: str | None
    age: int | None
    location: str | None
    land: float | None
    crops: List[str] = []


class FarmerRead(BaseModel):
    id: UUID
    name: str
    age: int
    location: str
    land: float
    crops: List[str]

    class Config:
        orm_mode = True


class FarmerWithCropsResponse(BaseModel):
    name: str
    crops: List[str]  # List of crop names

    class Config:
        orm_mode = True


class FarmerWithCrops(BaseModel):
    name: str
    crops: List[str]

    class Config:
        orm_mode = True