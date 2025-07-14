from fastapi import FastAPI, HTTPException
from dotenv import load_dotenv
import os
import requests

load_dotenv()

app = FastAPI()

NASA_API_KEY = os.getenv("NASA_API_KEY")

@app.get("/")
async def read_root():
    return {"message": "Welcome to the Astronomy Dashboard Backend!"}

@app.get("/api/apod")
async def get_apod():
    if not NASA_API_KEY:
        raise HTTPException(status_code=500, detail="NASA_API_KEY not set in .env")
    
    apod_url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
    try:
        response = requests.get(apod_url)
        response.raise_for_status() # Raise an HTTPError for bad responses (4xx or 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error fetching APOD: {e}")

@app.get("/api/test")
async def test_api():
    if not NASA_API_KEY:
        return {"error": "NASA_API_KEY not set in .env"}
    return {"message": "API test successful!", "nasa_api_key_status": "Key is set"}
