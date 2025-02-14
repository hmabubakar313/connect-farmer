from sqlalchemy import Column, String, Float, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from enum import Enum
import uuid
from datetime import datetime
from .base import Base


class CropType(Enum):
    FRUIT = "Fruit"
    VEGETABLE = "Vegetable"
    GRAIN = "Grain"
    LEGUME = "Legume"
    OTHER = "Other"


class Crop(Base):
    __tablename__ = 'crops'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    crop_name = Column(String, nullable=False)
    crops_type = Column(String, nullable=False)
    crops_quantity = Column(Float, nullable=False)
    crops_price = Column(Float, nullable=False)
    crops_quality = Column(String, nullable=False)
    crops_location = Column(String, nullable=False)
    crops_date = Column(DateTime, default=datetime.utcnow)

    crops_farmer = Column(UUID(as_uuid=True), ForeignKey('farmer.id'), nullable=False) # noqa

    farmer = relationship('Farmer', back_populates='crops')

    def __repr__(self):
        return f"<Table(id={self.id}, crop_name={self.crop_name}, crops_type={self.crops_type})>" # noqa
