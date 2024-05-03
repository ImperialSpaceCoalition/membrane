# Social Network API

Welcome to the Social Network API! This API allows users to perform various operations such as managing users, thoughts, reactions, and friends within a social network.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use this API, you'll need Node.js and MongoDB installed on your machine.

1. Clone this repository to your local machine:
git clone https://github.com/ImperialSpaceCoalition/membrane.git
Navigate to the project directory:

cd social-network-api

2. Install the required dependencies:
- npm install

4. Start the server:
- npm start

## Usage
Once the server is running, you can interact with the API using Insomnia or Postman. The API provides endpoints for managing users, thoughts, reactions, and friends.

## Walkthrough Video
- https://drive.google.com/file/d/1Ry5pQ1VKlEz7lwAsx_uVcpjsKrXedW-p/view?usp=sharing

## Endpoints

### Users
- GET /api/users: Get all users
- POST /api/users: Create a new user
- PUT /api/users/:id: Update an existing user
- DELETE /api/users/:id: Delete a user
### Thoughts
- GET /api/thoughts: Get all thoughts
- POST /api/thoughts: Create a new thought
- PUT /api/thoughts/:id: Update an existing thought
- DELETE /api/thoughts/:id: Delete a thought
- POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought
### Friends
- POST /api/users/:userId/friends/:friendId: Add a friend to a user's friend list
- DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list



## Contributing
Contributions are welcome! Feel free to open issues or pull requests.

## License
This project is licensed under the MIT License.
