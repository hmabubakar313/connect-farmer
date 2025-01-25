from fastapi import FastAPI
from api.farmer import router as v1_router
from api.user import router

app = FastAPI()

# Mount the v1 router at '/api/v1'
app.include_router(v1_router, prefix="/farmer", tags=["v1"])
app.include_router(router, prefix="/user", tags=["user"])
