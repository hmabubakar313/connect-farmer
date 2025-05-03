from pydantic import BaseModel, EmailStr
from uuid import UUID
from typing import Optional
from datetime import datetime


class ReadVendor(BaseModel):
    id: UUID
    shop_name: str | None
    owner_name: str | None
    contact_number: Optional[str] = None
    email: Optional[EmailStr] = None
    address: Optional[str] = None

    registration_number: Optional[str] = None
    license_number: Optional[str] = None
    established_date: Optional[datetime] = None

    crops: UUID
    farmer: UUID

    total_sales: float = 0.0
    total_purchases: float = 0.0
    payment_method: Optional[str] = None

    rating: float = 0.0
    reviews_count: int = 0

    is_active: bool = True
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class CreateVendor(BaseModel):
    shop_name: str
    owner_name: str
    contact_number: Optional[str] = None
    email: Optional[EmailStr] = None
    address: Optional[str] = None

    registration_number: Optional[str] = None
    license_number: Optional[str] = None
    established_date: Optional[datetime] = None

    crops: UUID
    farmer: UUID

    payment_method: Optional[str] = None

    class Config:
        from_attributes = True
