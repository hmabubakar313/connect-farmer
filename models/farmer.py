from pydantic import BaseModel
from uuid import UUID
from typing import Optional, List


class FarmerCreate(BaseModel):
    name: str
    age: int
    location: str
    land: float
    crops: Optional[List[UUID]] = []


class FarmerRead(BaseModel):
    id: UUID
    name: str
    age: int
    location: str
    land: float
    crops: List[str]

    class Config:
        orm_mode = True
