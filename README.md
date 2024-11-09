
# Electronics Products CRUD API

This project is a simple CRUD (Create, Read, Update, Delete) API for managing electronic products. Built using MongoDB, Express, and Node.js, this API allows you to perform basic operations on an electronic products database.

## Features

- **Create** new electronic product entries.
- **Read** existing product entries (single or all).
- **Update** product details.
- **Delete** product entries.

## Prerequisites

- Node.js
- MongoDB Atlas or local MongoDB instance
- npm

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root of the project with the following variables:

   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database-name>?retryWrites=true&w=majority
   ```

4. **Start the server**

   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

| Method | Endpoint           | Description                  |
|--------|---------------------|------------------------------|
| GET    | /api/products      | Get all products             |
| GET    | /api/products/:id  | Get a single product by ID   |
| POST   | /api/products      | Create a new product         |
| PUT    | /api/products/:id  | Update a product by ID       |
| DELETE | /api/products/:id  | Delete a product by ID       |

## Sample Product Schema

```javascript
{
    "name": "Product Name",
    "quantity": 10,
    "price": 1999,
    "image": "https://example.com/product.jpg"
}
```

## Usage

- Use an API client like Postman to test the endpoints.
- Make sure to include the Content-Type header as `application/json` for POST and PUT requests.

## Error Handling

- **400 Bad Request**: Invalid input data.
- **404 Not Found**: Product not found for specified ID.
- **500 Internal Server Error**: Server or database error.

## License

This project is licensed under the MIT License.
