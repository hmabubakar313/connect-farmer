from pydantic import BaseModel
from uuid import UUID


class CreateUser(BaseModel):
    id: UUID
    name: str
    username: str
    email: str
    role: str | None
    password: str

    class Config:
        orm_mode = True


class ReadUser(BaseModel):
    id: UUID
    name: str
    username: str
    email: str
    role: str | None

    class Config:
        orm_mode = True
