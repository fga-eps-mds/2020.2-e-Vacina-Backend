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
{
  "email": "{email}",
  "password": "{password}",
  "phoneNumber:" "{phoneNumber}"
}
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
      "profilesIds": {profilesIds},
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
  "user": {
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
{
  "email": "{email}",
}
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
























## Profile

### CreateProfile:

Route:
```
POST localhost:PORT/profile/user/{userId}
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Body:
```json:
{
  "name": "{name}",
  "cpf": "{cpf}",
  "birthDate:" "{birthDate}",
  "sex": "{sex}"
}
```
Note: Use the format mm/dd/yyyy to birthDate

Expected Response:
```json:
{
  "savedProfile": {
    "_id": "60707f4584035d002a77ce56",
    "name": "Carlos Daniel",
    "cpf": "06462233133",
    "birthDate": "2000-11-09T00:00:00.000Z",
    "sex": "male",
    "__v": 0
  }
}
```

### ListProfiles:
Route:
```
GET localhost:PORT/profile/user/{userId}
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Expected Response:
```json:
{
  "profiles": [
    {
      "_id": "{profileId}",
      "name": "{name}",
      "cpf": "{cpf}",
      "birthDate": "{birthDate}",
      "sex": "{sex}",
      "__v": 0
    },
    {
      "_id": "{profileId}",
      "name": "{name}",
      "cpf": "{cpf}",
      "birthDate": "{birthDate}",
      "sex": "{sex}",
      "__v": 0
    }
  ]
}
```
### GetProfileById:

Route:
```
GET localhost:PORT/profile/{profileId}
```

Expected Response:
```json:
{
  "profile": {
    "_id": "{profileId}",
    "name": "{name}",
    "cpf": "{cpf}",
    "birthDate": "{birthData}",
    "sex": "{sex}",
    "__v": 0
  }
}
```
### UpdateProfile:

Route:
```
PUT localhost:PORT/profile/{profileId}
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Body:
```json:
{
  "name": "{name}",
}
```
NOTE: Only send in the body the fields you want to update.

Expected Response:
```json:
{
  "updatedProfile": {
    "_id": "{profileId}",
    "name": "{name}",
    "cpf": "{cpf}",
    "birthDate": "{birthDate}",
    "sex": "{sex}",
    "__v": 0
  }
}
```
### DeleteProfile:

Route:
```
DELETE localhost:PORT/profile/{profileId}/user/{userId}
```
Header:
```
Authorization: Bearer {Auth Token} 
```

Expected Response:
```json:
{
  "message": "Successfully deleted user
  with id: {profileId}",
}
```