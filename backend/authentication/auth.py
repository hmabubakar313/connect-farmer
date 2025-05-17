from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/token")


def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_id = payload.get("sub")
        print(user_id, "user_id")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        return {"user_id": user_id}
    except JWTError:
        import traceback

        traceback.print_exc()
        raise HTTPException(status_code=401, detail="Invalid token")
