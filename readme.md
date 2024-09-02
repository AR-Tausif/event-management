# Simple Event Management API

This project is a Simple Event Management API built with Node.js, Express, and Mongoose. The API provides CRUD operations to manage events and their participants, with additional features such as time conflict detection, pagination.

## Features

- **Create, Read, Update, Delete (CRUD) Events**: Full CRUD support for managing events.
- **Participant Management**: Add and remove participants for specific events.
- **Time Conflict Detection**: Ensures no overlapping events occur at the same location.
- **Pagination**: Efficiently handles listing large numbers of events.
<!-- - **Security**: Basic security measures to prevent unauthorized access. -->

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
  <!-- - **Authentication**: JWT (JSON Web Token) -->
  <!-- - **Validation**: Zod -->

## Folder Structure

```plaintext

.
├── src
|   ├── config
|   |   ├── index.js
|   ├── controllers
|   |   ├── event.controller.js
|   ├── model
|   |   ├── event.model.js
|   ├── routes
|   |   ├── event.route.js
|   |   ├── index.js
├── app.js
├── server.js
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

### Folder Descriptions

- **controllers**: Contains the business logic for handling requests and responses.
- **models**: Defines the Mongoose schemas and models.
- **routes**: Handles API endpoints and routes.
- **app.js**: Entry point for the Express server.
- **config.js**: Configuration file for environment variables.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.4 or higher)
- [Postman](https://www.postman.com/) for API testing

### Prerequisites

- **Node.js** (v14+)
- **MongoDB** (local instance or MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AR-Tausif/event-management.git
   cd event-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:

   ```bash
   NODE_ENV="development"
   PORT=5000
   LOCAL_DATABASE_URL="mongodb://localhost:27017/airepro-solution-pvt-ltd"
   DATABASE_URL="your_mongodb_atlas_url"
   FRONTEND_ORIGIN="http://localhost:3000,http://your-production-frontend-url.com"
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.
