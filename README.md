# 🏋️‍♂️ Exercise Tracker Microservice

This project is part of the [freeCodeCamp Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).

## 📌 Overview

The Exercise Tracker allows users to log their exercise activities and track the duration of each exercise. It stores the exercise details in a database and provides an API to access them.

## 🔍 Features

- Allows users to add exercises with a description, duration, and optional date.
- Tracks multiple exercises over time.
- Retrieves the list of exercises for a user within a specific date range.

## 📡 API Endpoints

### `POST /api/exercise/new-user`

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

### `POST /api/exercise/add`

Log an exercise for an existing user:

**Request body:**
{
  "userId": "someUserId",
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

### `GET /api/exercise/log`

Retrieve the exercise log for a user:

**Query parameters:**
- `userId`: The ID of the user.
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

- Node.js
- Express.js


## 💻 Source Code

🔗 [GitHub Repository](https://github.com/giannis07/fcc_exercise_tracker)

## 🛠️ Getting Started Locally

1. Clone the repository:
 ```bash
git clone https://github.com/giannis07/fcc_exercise_tracker.git
cd fcc_exercise_tracker
```

2. Install dependencies:
 ```bash
npm install
```

3. Start the server:
 ```bash
npm start
```

4. Use a tool like Postman or your browser to test the API.
