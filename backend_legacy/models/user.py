from uuid import UUID

from pydantic import BaseModel


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
    password: str

    class Config:
        orm_mode = True
