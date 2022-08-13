# API
## 1. Login
`GET /api/login`
### Request Headers
```
None
```
### Request
```
{
    "username": <STRING>,
    "password": <STRING>
}
```
### Response
```
{
    "roles": [
        <STRING>, ...
        <STRING>
    ],
    "accessToken": <STRING>,
    "username": <STRING>
}
```

## 2. Retrieve all warranty categories
`GET /api/warrantycategories`
### Request Headers
```
None
```
### Request
```
None
```
### Response
```
[
    {
        "id": <INTEGER>,
        "name": <STRING>,
        "createdBy": <STRING>,
        "createdOn": <TIMESTAMP>,
        "updatedBy": <STRING>,
        "updatedOn": <TIMESTAMP>
    }, ...
    {
        "id": <INTEGER>,
        "name": <STRING>,
        "createdBy": <STRING>,
        "createdOn": <TIMESTAMP>,
        "updatedBy": <STRING>,
        "updatedOn": <TIMESTAMP>
    }
]
```

## 1. Retrieve all warranties
`GET /api/warranties`
### Request Headers
```
Authorization: Bearer <ACCESS_TOKEN>
```
### Request
```
None
```
### Response
```
[
    {
        "id": <INTEGER>,
        "productName": <STRING>,
        "brand": <STRING>,
        "status": <STRING>,
        "statusColorCode": <STRING>
    }, ...
    {
        "id": <INTEGER>,
        "productName": <STRING>,
        "brand": <STRING>,
        "status": <STRING>,
        "statusColorCode": <STRING>
    }
]
```
