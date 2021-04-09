# e-Vacina API


## Base URL
```
localhost:PORT
```

## User 

### CreateUser:

Route:
```
POST localhost:PORT/user
```

Body:
```json:
"email": "{email}",
"password": "{password}",
"phoneNumber:" "{phoneNumber}"
```
Expected Response:
```json:
{
  "savedUser": {
    "profilesIds": "{profilesIds}",
    "_id": "{userId}",
    "email": "{email}",
    "phoneNumber": "{phoneNumber}",
    "__v": 0
  }
}
```

### ListUsers:
Route:
```
GET localhost:PORT/user
```

Expected Response:
```json:
{
  "users": [
    {
      "profilesIds": "{profilesIds}",
      "_id": "{userId}",
      "email": "{email}",
      "phoneNumber": "{phoneNumber}",
      "__v": 0
    },
    {
      "profilesIds": [],
      "_id": "{userId}",
      "email": "{email}",
      "phoneNumber": "{phoneNumber}",
      "__v": 0
    }
  ]
}
```
### GetUserById:

Route:
```
GET localhost:PORT/user/{userId}
```

Expected Response:
```json:
{
  "savedUser": {
    "profilesIds": "{profilesIds}",
    "_id": "{userId}",
    "email": "{email}",
    "phoneNumber": "{phoneNumber}",
    "__v": 0
  }
}
```
### UpdateUser:

Route:
```
PUT localhost:PORT/user
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Body:
```json:
"email": "{email}",
```
NOTE: Only send in the body the fields you want to update.

Expected Response:
```json:
{
  "updatedUser": {
    "profilesIds": "{profilesIds}",
    "_id": "{userId}",
    "email": "{email}",
    "phoneNumber": "{phoneNumber}",
    "__v": 0
  }
}
```
### DeleteUser:

Route:
```
DELETE localhost:PORT/user/{userId}
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Expected Response:
```json:
{
  "message": "Successfully deleted user with id: {userId}",
}
```