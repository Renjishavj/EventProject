# Simple Event Management API

A RESTful API for managing events using Express and MongoDB.

## Features

- Create, view, update, and delete events
- Date validation
- JSON responses
- No authentication required

## API Endpoints

- `POST /events` – Create an event
- `GET /events` – List all events
- `GET /events/:id` – Get an event
- `PUT /events/:id` – Update an event
- `DELETE /events/:id` – Delete an event

## Getting Started

1. npm install express mongoose dotenv nodemon

2. create the server by using the port and connect to the mongodb to a specified db and collection

3. In package.json add the "Dev:"nodemon server.js" to run the project

4. Set up the model,controller,route and perform the date validation

5. Run the project by using the cmd "npm run Dev"

6. check the program by using Thunderclient or postman

   Create Event = http://localhost:3300/events

    Get All Events=http://localhost:3300/events

    Get Specific Event by ID=http://localhost:3300/events/<event_id>
    
    Update Event=http://localhost:3300/events/<event_id>

    Delete Event = http://localhost:5000/events/<event_id>


