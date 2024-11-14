Healthcare Service API



A RESTful API built with Node.js, Express, and MongoDB to manage healthcare services. This API allows CRUD operations to add, view, update, and delete healthcare services.

Table of Contents
Features
Tech Stack
Prerequisites
Setup and Installation
Environment Variables
Running the Project
API Endpoints
Testing
Contributing
Features
Add Service: Create a healthcare service with name, description, and price.
Retrieve Services: Get a list of all healthcare services.
Update Service: Modify the details of an existing service.
Delete Service: Remove a healthcare service from the list.
Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Prerequisites
Node.js (version 14 or higher)
MongoDB (local installation or MongoDB Atlas)
Git (for cloning the repository)
Setup and Installation
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/healthcare-service-api.git
cd healthcare-service-api
2. Install Dependencies
bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
MONGO_URI=<your-mongodb-connection-string>
PORT=5000
Replace <your-mongodb-connection-string> with your MongoDB URI.
Set the PORT variable to any available port number (default is 5000).
Environment Variables
The project requires a .env file with the following variables:

Variable	Description
MONGO_URI	MongoDB connection string
PORT	Port for the server (default: 5000)
Running the Project
1. Start MongoDB
For local MongoDB: ensure MongoDB is running on localhost:27017.
For MongoDB Atlas: ensure the correct URI is set in the .env file.
2. Run the Server
Start the server by running:

bash
Copy code
npm start
The server will start on http://localhost:5000 (or the port specified in .env).

3. Test API Endpoints
Use Postman or any API client to test the endpoints.

API Endpoints
Method	Endpoint	Description
POST	/api/services	Add a new service
GET	/api/services	Get all services
PUT	/api/services/:id	Update an existing service
DELETE	/api/services/:id	Delete a service
Example Request and Response
POST /api/services
Request Body:
json
Copy code
{
    "name": "General Checkup",
    "description": "Comprehensive health checkup",
    "price": 50
}
Response:
json
Copy code
{
    "_id": "60c72b2f5f1b2c001c8e4f1c",
    "name": "General Checkup",
    "description": "Comprehensive health checkup",
    "price": 50,
    "__v": 0
}
Testing
To test the API endpoints, use Postman or any other API client.

Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.
