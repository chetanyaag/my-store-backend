# My Store Backend (node: 23.6.1 and npm: 11.1.0)

This is a simple backend service built using the [NestJS](https://nestjs.com/) framework. It provides a single API endpoint that returns a list of products along with their categories.

This backend is a part of the **MyStore** full-stack application, which consists of:

- **my-store-backend**: The backend service (this repository).
- [**my-store-orm**](https://github.com/chetanyaag/my-store-orm): A module responsible for handling database transactions.
- [**my-store-app**](https://github.com/chetanyaag/my-store-app): A React-based frontend application that consumes this API and renders data to users.

## Features

- Built with NestJS
- Single API endpoint to fetch products with their categories

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/chetanyaag/my-store-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-store-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

### Development Mode

```sh
npm run start
```

### Watch Mode

```sh
npm run start:dev
```

The service runs on port 3000 by default.

## Environment Variables

Create a `.env` file in the root directory and define necessary environment variables:

```sh
DB_HOST=localhost
DB_PORT=3306
DB_USER=mystore_user
DB_PASS=mystore_password
DB_NAME=mystore
```

## API Endpoints

### Get Products

- **Endpoint:** `GET /products`
- **Description:** Returns a list of products along with their categories.
- **Response Format:**
  ```json
   [
  {
    "id": 1,
    "name": "Smartphone",
    "price": "699.00",
    "stockQuantity": 10,
    "createdAt": "2025-02-16T02:31:37.000Z",
    "updatedAt": "2025-02-16T02:31:37.000Z",
    "category": {
      "id": 10,
      "name": "Electronics",
      "description": "Electronic Items",
      "isActive": true,
      "createdAt": "2025-02-16T02:31:36.000Z",
      "updatedAt": "2025-02-16T02:31:36.000Z"
    }
  },
  {
    "id": 2,
    "name": "Laptop",
    "price": "999.00",
    "stockQuantity": 10,
    "createdAt": "2025-02-16T02:31:37.000Z",
    "updatedAt": "2025-02-16T02:31:37.000Z",
    "category": {
      "id": 10,
      "name": "Electronics",
      "description": "Electronic Items",
      "isActive": true,
      "createdAt": "2025-02-16T02:31:36.000Z",
      "updatedAt": "2025-02-16T02:31:36.000Z"
    }
  }
  ]
  ```

