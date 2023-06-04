# Real-Time_CRUD
# MERN/PERN Stack CRUD Real-Time System

This is a simple CRUD (Create, Read, Update, Delete) real-time system implemented using the MERN/PERN stack. It allows users to manage records with real-time updates using Socket.io. The system consists of a MongoDB database, Express.js for the backend API, React.js for the frontend, and Node.js as the server runtime.
# Features

    Adding Record: Users can add new records to the system.
    Removing Record: Users can remove existing records from the system.
    Updating Record: Users can update the information of existing records.
    Deleting Record: Users can delete records from the system.
    Multi Image Upload Field: The system supports uploading multiple images for each record.

# Technologies Used

The following technologies and libraries were used to implement this system:

   # Backend:
        Node.js: Server-side runtime environment.
        Express.js: Web application framework for building the REST API.
        MongoDB: Database for storing records.
        Socket.io: Real-time communication for updating records in real-time.

   # Frontend:
        React.js: JavaScript library for building the user interface.
        Redux: State management library for managing application state.
        Semantic UI React: UI framework for styling the frontend components.

# Prerequisites

To run this application locally, you need to have the following installed on your machine:

    Node.js: Install Node.js from the official website.
    MongoDB: Install MongoDB either locally or use a cloud-based service like Mongo Atlas.

# Installation

    Clone the repository:

    bash

git clone `https://github.com/Shubhamtribhuvan8/Real-Time_CRUD.git`

Navigate to the project directory:

bash

cd your-repo

Install the backend dependencies:

bash

cd backend
npm install

# Install the frontend dependencies:

bash

    cd ../frontend
    npm install

Configuration

    Create a .env file in the backend directory and provide the necessary configuration variables, such as database connection URL, port, etc.

    bash

PORT=5000
DB_CONNECTION=mongodb://localhost:27017/mydatabase

Update the backend API URL in the frontend. Open frontend/src/api/api.js file and set the BASE_URL variable to the backend API URL.

javascript

    export const BASE_URL = "http://localhost:5000/api";

Usage

    Start the backend server:

    bash

cd backend
npm start

Start the frontend development server:

bash

    cd frontend
    npm start

    Open your browser and navigate to http://localhost:3000 to access the application.

# Folder Structure

The project has the following folder structure:

    backend: Contains the backend server code.
        controllers: Contains the route handlers for different API endpoints.
        models: Defines the database models and schema.
        routes: Defines the API routes and endpoints.
        utils: Contains utility functions and modules.
    frontend: Contains the frontend code.
        src: Contains the source code for the frontend application.
            api: Defines the API endpoints and functions for making HTTP requests.
            components: Contains reusable components used in the UI.
            redux: Contains Redux actions, reducers, and store configuration.
            views: Contains the main views and
