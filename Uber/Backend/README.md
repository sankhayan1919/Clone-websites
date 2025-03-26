# Backend API Documentation

## `/user/register` Endpoint

This endpoint creates a new user account by registering the user.

- **Method:** `POST`

### Request Data

The endpoint expects a JSON body with the following structure:

- **fullname:** Object  
  - **firstname:** _string_ (required, minimum 3 characters, maximum 20 characters)  
  - **lastname:** _string_ (optional, minimum 3 characters, maximum 20 characters)
- **email:** _string_ (required, valid email format, minimum 5 characters, maximum 50 characters)
- **password:** _string_ (required, minimum 6 characters)

### Example Response
- `user` (object):
 - **fullname:** Object  
  - **firstname:** _string_ (required, minimum 3 characters, maximum 20 characters)  
  - **lastname:** _string_ (optional, minimum 3 characters, maximum 20 characters)
 - **email:** _string_ (required, valid email format, minimum 5 characters, maximum 50 characters)
 - **password:** _string_ (required, minimum 6 characters)
- `token` (String): JWT Token
 
### Example JSON Body

{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword123"
}

### Response Status Codes

- **201 Created:** User account successfully created.
- **400 Bad Request:** Invalid input data.
- **409 Conflict:** User with the given email already exists.
- **500 Internal Server Error:** An error occurred on the server.