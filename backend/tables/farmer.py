from sqlalchemy import Column, Integer, String, UUID
from sqlalchemy.orm import relationship
import uuid
from .base import Base


class Farmer(Base):
    __tablename__ = 'farmer'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    age = Column(Integer, nullable=True)
    location = Column(String(200), nullable=True)
    land = Column(Integer, nullable=True)
    crops = relationship('Crop', back_populates='farmer')

    def __repr__(self):
        return f"<Farmer(id={self.id}, name={self.name}, location={self.location})>" # noqa
