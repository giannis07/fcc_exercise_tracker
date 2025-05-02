# 🏋️‍♂️ Exercise Tracker Microservice

This project is part of the [freeCodeCamp Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

## 📌 Overview

The Exercise Tracker is a backend application that allows users to track their exercise routines. It is built using **Node.js**, **Express.js**, and **MongoDB**. Users can create accounts, log exercises with descriptions and durations, and retrieve their exercise history. The application is designed to store user and exercise data in a MongoDB database and provide a RESTful API to interact with the data.

## 🔍 Features

- Create a new user by providing a username.
- Log an exercise for a user, including the exercise description, duration, and optional date.
- Retrieve a user’s exercise log with optional date filtering and limit.
- Store and retrieve exercise data using MongoDB.

## 📡 API Endpoints

### `POST /api/users`
Create a new user:

**Request body:**
{
  "username": "JohnDoe"
}

**Response:**
{
  "username": "JohnDoe",
  "_id": "someUserId"
}

### `POST /api/users/:_id/exercises`
Log an exercise for a user:

**Request body:**
{
  "description": "Running",
  "duration": 30,
  "date": "2025-05-01"
}

**Response:**
{
  "username": "JohnDoe",
  "description": "Running",
  "duration": 30,
  "date": "2025-05-01",
  "_id": "someExerciseId"
}

### `GET /api/users/:_id/logs`
Retrieve the exercise log for a user:

**Query parameters:**
- `from`: The start date (optional).
- `to`: The end date (optional).
- `limit`: The number of exercises to return (optional).

**Response:**
{
  "username": "JohnDoe",
  "count": 2,
  "log": [
    {
      "description": "Running",
      "duration": 30,
      "date": "2025-05-01"
    },
    {
      "description": "Swimming",
      "duration": 45,
      "date": "2025-05-02"
    }
  ]
}

## ⚙️ Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and exercise data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## 🛠️ Getting Started Locally

1. **Clone the repository**:
   git clone https://github.com/giannis07/fcc_exercise_tracker.git
   cd fcc_exercise_tracker

2. **Install dependencies**:
   npm install

3. **Set up environment variables**:
   Create a `.env` file in the root directory of the project with the following contents:
   MONGO_URI=your-mongodb-uri-here
   
5. **Start the server**:
   npm start

6. The server should now be running locally. You can test the API using a tool like [Postman](https://www.postman.com/) or curl.


## 💻 Source Code

🔗 [GitHub Repository](https://github.com/giannis07/fcc_exercise_tracker)
