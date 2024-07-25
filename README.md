# BajPe

## Features:
Welcome to the BajPe project! This project aims to replicate the basic functionality of PayTM, allowing users to perform transactions, view their account balance, and interact with other users.

- User Authentication
- User can send money to other users
## Features

- User Authentication & Authorization using JWT
- View Account Balance
- Search and view other users
- Send money to other users' accounts

## Technology Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Getting Started

To get started with the BajPe project, follow these steps:

1. **Clone the Repository**: Clone the repository from GitHub:

   ```
   git clone https://github.com/aaryan182/BajPe.git
   ```

2. **Set Environment Variables**: Navigate to the `frontend` and `backend` folders and add necessary environment variables. You may need to create a `.env` file and configure it with required variables:
   In the backend/.env file:
   ```
   MONGO_URL = your-mongo-url
   PORT = 3000
   JWT_SECRET = your-jwt-secret
   ```
   In the frontend/.env file:
   ```
   VITE_SERVER_URL = your-server-url
   ```

3. **Install Dependencies**: Install dependencies in the `frontend` and `backend` folders using npm or yarn:

   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. **Start the Backend Server**: In the `backend` folder, start the development server using npm:

   ```
   npm run dev
   ```

5. **Start the Frontend**: In the `frontend` folder, start the frontend application:

   ```
   npm run dev
   ```

## Database Transactions

BajPe uses MongoDB Transactions to guarantee accurate and reliable data handling. These transactions follow strict rules to ensure that data is either completely updated or restored to its original state if something goes wrong, preventing any data inconsistencies.
