from sqlalchemy.dialects.postgresql import UUID
import uuid

from sqlalchemy import Column, String, Enum
from enum import Enum as BaseEnum
from .base import Base


# Enum for user roles
class UserRole(BaseEnum):
    FARMER = "farmer"
    VENDOR = "vendor"


class User(Base):
    __tablename__ = 'user'
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    username = Column(String(100), nullable=False, unique=True)
    password = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    role = Column(Enum(UserRole), nullable=False)

    def __repr__(self):
        return f"<User(name={self.name}"
