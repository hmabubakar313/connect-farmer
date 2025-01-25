from fastapi import FastAPI
from api.farm_api import router as v1_router

app = FastAPI()

# Mount the v1 router at '/api/v1'
app.include_router(v1_router, prefix="/api", tags=["v1"])
