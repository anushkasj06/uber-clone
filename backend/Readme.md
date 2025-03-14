# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON object containing an authentication token and the user details.

### Request Body:
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 2 characters (required).
  - `lastname`: A string with a minimum length of 2 characters (optional).
- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201):
- **Description**: User registered successfully.
- **Body**:
  ```json
  {
    "token": "auth_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON object containing an authentication token and the user details if the credentials are valid.

### Request Body:
The request body should be a JSON object with the following properties:
- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 6 characters (required).


Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200):
- **Description**: User authenticated successfully.
- **Body**:
  ```json
  {
    "token": "auth_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, and creates a new user in the database. Upon successful registration, it returns a JSON object containing an authentication token and the user details.

### Request Body:
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 2 characters (required).
  - `lastname`: A string with a minimum length of 2 characters (optional).
- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (201):
- **Description**: User registered successfully.
- **Body**:
  ```json
  {
    "token": "auth_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/users/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to authenticate a user. It validates the input data, checks the user's credentials, and returns a JSON object containing an authentication token and the user details if the credentials are valid.

### Request Body:
The request body should be a JSON object with the following properties:
- `email`: A string representing the user's email address (required, must be a valid email).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses:

#### Success (200):
- **Description**: User authenticated successfully.
- **Body**:
  ```json
  {
    "token": "auth_token",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

#### Unauthorized (401):
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/users/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

# User Profile Endpoint

## Endpoint: `/users/profile`

### Method: GET

### Description:
This endpoint is used to retrieve the authenticated user's profile information.

### Headers:
- `Authorization`: Bearer token (required).

### Responses:

#### Success (200):
- **Description**: User profile retrieved successfully.
- **Body**:
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

#### Unauthorized (401):
- **Description**: Invalid or missing token.
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer auth_token"
```

# User Logout Endpoint

## Endpoint: `/users/logout`

### Method: GET

### Description:
This endpoint is used to log out the authenticated user by clearing the authentication token and blacklisting it.

### Headers:
- `Authorization`: Bearer token (required).

### Responses:

#### Success (200):
- **Description**: User logged out successfully.
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized (401):
- **Description**: Invalid or missing token.
- **Body**:
  ```json
  {
    "message": "Unauthorized"
  }
  ```

### Example Request:
```bash
curl -X GET http://localhost:3000/users/logout \
-H "Authorization: Bearer auth_token"
```

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, and creates a new captain in the database. Upon successful registration, it returns a JSON object containing an authentication token and the captain details.

### Request Body:
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 2 characters (required).
  - `lastname`: A string with a minimum length of 2 characters (optional).
- `email`: A string representing the captain's email address (required, must be a valid email).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: A number representing the vehicle's capacity (required, must be at least 1).
  - `vehicleType`: A string representing the type of vehicle (required, must be one of 'car', 'motorcycle', 'auto').

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
### Responses:

#### Success (201):
- **Description**: Captain registered successfully.
- **Body**:
  ```json
  {
    "token": "auth_token",
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
 }
  ```

#### Client Error (400):
- **Description**: Validation error or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "parameter_name",
        "location": "body"
      }
    ]
  }
  ```

### Example Request:
```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```