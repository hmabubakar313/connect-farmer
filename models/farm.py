from pydantic import BaseModel, Field
from uuid import UUID
from typing import Optional, List


class FarmerCreate(BaseModel):
    name: str
    age: int
    location: str
    land: float
    crops: Optional[List[UUID]] = []  # Expect list of Crop IDs (Foreign Keys)


class FarmerRead(BaseModel):
    id: UUID
    name: str
    age: int
    location: str
    land: float
    crops: List[str]  # Convert Crop UUIDs to Crop Names

    class Config:
        orm_mode = True  # Enable SQLAlchemy to Pydantic co
