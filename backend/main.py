from fastapi import FastAPI
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Astronomy Dashboard Backend!"}

@app.get("/api/test")
async def test_api():
    nasa_api_key = os.getenv("NASA_API_KEY")
    if not nasa_api_key:
        return {"error": "NASA_API_KEY not set in .env"}
    return {"message": "API test successful!", "nasa_api_key_status": "Key is set"}
