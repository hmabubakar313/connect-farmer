from fastapi import FastAPI
from api.farmer import router as farmer_router
from api.user import router as user_router
from api.crops import router as crops_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(farmer_router, prefix="/farmer", tags=["farmer"])
app.include_router(user_router, prefix="/user", tags=["user"])
app.include_router(crops_router, prefix="/crops", tags=["crops"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
