# AstronomyDashboardV2

This project is a comprehensive astronomy dashboard built with a React frontend and a FastAPI (Python) backend. It aims to provide a rich user experience by integrating various NASA APIs and presenting the data with a modern, dark-themed UI/UX.

## Architecture

*   **Frontend:** React (Vite)
    *   Provides an interactive and responsive user interface.
    *   Communicates with the FastAPI backend to fetch and display data.
*   **Backend:** FastAPI (Python)
    *   Acts as an API proxy and orchestrator for various NASA APIs.
    *   Securely stores API keys.
    *   Handles server-side data fetching, aggregation, and transformation.

## Features (Planned)

*   **Astronomy Picture of the Day (APOD):** Display daily astronomy images and descriptions.
*   **International Space Station (ISS) Tracking:** Real-time ISS location.
*   **Moon Phase:** Current moon phase information.
*   **Near Earth Objects (NEOs):** Data on potentially hazardous asteroids.
*   **Mars Rover Photos:** Latest images from Mars rovers.
*   **Earth Polychromatic Imaging Camera (EPIC) Images:** Daily images of Earth.
*   **NASA Image and Video Library Search:** Search and view NASA's extensive media collection.
*   **Interactive Star Chart:** Dynamic star chart based on user location.
*   **Favorites:** Save favorite content locally.
*   **Dark Mode:** Optimized dark theme with toggle.
*   **Offline Support:** Caching for offline access.
*   **Social Sharing:** Share content directly from the app.

## Getting Started

### Prerequisites

*   Node.js and npm (for frontend)
*   Python 3.8+ and pip (for backend)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/smile-plzz/AstronomyDashboardV2.git
    cd AstronomyDashboardV2
    ```

2.  **Backend Setup:**

    ```bash
    cd backend
    python -m venv venv
    .\venv\Scripts\pip install -r requirements.txt # (You'll create this file later)
    # Create a .env file in the backend directory with your NASA_API_KEY
    # NASA_API_KEY=YOUR_NASA_API_KEY
    uvicorn main:app --reload
    ```

3.  **Frontend Setup:**

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

## Deployment

*   **Frontend:** Can be deployed to static hosting services like GitHub Pages.
*   **Backend:** Requires a platform that supports Python web applications (e.g., Heroku, Render, Vercel (serverless functions)).

## Development Notes

*   API keys are stored securely in the backend's `.env` file and are not exposed to the frontend.

## Contributing

Feel free to fork this repository and contribute to its development.
