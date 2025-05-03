from sqlalchemy import Column, String, ForeignKey, Integer, Float, Boolean, DateTime
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
import uuid
from datetime import datetime
from .base import Base


class Vendor(Base):
    __tablename__ = "vendors"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, nullable=False)
    shop_name = Column(String, nullable=False)
    owner_name = Column(String, nullable=False)
    contact_number = Column(String, nullable=True)
    email = Column(String, nullable=True)
    address = Column(String, nullable=True)

    registration_number = Column(String, nullable=True)
    license_number = Column(String, nullable=True)
    established_date = Column(DateTime, nullable=True)

    crops = Column(UUID(as_uuid=True), ForeignKey("crops.id", ondelete="CASCADE"), nullable=False)
    farmer = Column(UUID(as_uuid=True), ForeignKey("farmer.id", ondelete="CASCADE"), nullable=False)

    total_sales = Column(Float, default=0.0)
    total_purchases = Column(Float, default=0.0)
    payment_method = Column(String, nullable=True)

    rating = Column(Float, default=0.0)
    reviews_count = Column(Integer, default=0)

    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
