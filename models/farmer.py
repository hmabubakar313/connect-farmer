from pydantic import BaseModel
from uuid import UUID


class FarmerCreate(BaseModel):
    name: str | None
    age: int | None
    location: str | None
    land: float | None
    crops: list[str] = []


class FarmerRead(BaseModel):
    id: UUID
    name: str
    age: int
    location: str
    land: float
    crops: list[str]

    class Config:
        orm_mode = True


class FarmerWithCropsResponse(BaseModel):
    name: str
    crops: list[str]

    class Config:
        orm_mode = True


class FarmerWithCrops(BaseModel):
    name: str
    crops: list[str]

    class Config:
        orm_mode = True
