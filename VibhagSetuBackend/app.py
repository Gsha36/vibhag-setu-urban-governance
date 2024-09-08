from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from werkzeug.security import check_password_hash
from pymongo import MongoClient
from pymongo.errors import PyMongoError
from fastapi.security import OAuth2PasswordBearer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

def connect_to_db():
    client = MongoClient("mongodb+srv://supriyayaya10:8ufoGqP7ARnVp9lL@cluster0.hsdvm.mongodb.net/")
    return client["VibhagSetu"]

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

class LoginModel(BaseModel):
    email: str
    password: str

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def authenticate_user(email: str, password: str) -> bool:
    try:
        db = connect_to_db()
        users_collection = db["User"]

        user = users_collection.find_one({"email": email})

        if user:
            # Check if the password matches the hashed password
            if check_password_hash(user["password"], password):
                return True
            else:
                return False
        else:
            return False
    except PyMongoError as e:
        raise Exception(f"An error occurred while querying the database: {e}")

# Login endpoint
@app.post("/login/")
async def login(data: LoginModel):
    try:
        if authenticate_user(data.email, data.password):
            return {"message": "Login successful!"}
        else:
            raise HTTPException(status_code=401, detail="Invalid email or password")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))