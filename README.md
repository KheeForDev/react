# API
## Retrieve all colors
`GET /api/color/getAll`
### Request
```
None
```
### Response
```
[
    {
        "id": <INTEGER>,
        "color_name": <STRING>,
        "color_value": <STRING>
    }, ...
    {
        "id": <INTEGER>,
        "color_name": <STRING>,
        "color_value": <STRING>
    }
]
```
## Retrieve all notes
`GET /api/note/getAll`
### Request
```
None
```
### Response
```
[
    {
        "id": <INTEGER>,
        "title": <STRING>,
        "content": <STRING>,
        "color": <STRING>,
        "createdBy": <STRING>,
        "createdOn": <INTEGER>
    }, ...
    {
        "id": <INTEGER>,
        "title": <STRING>,
        "content": <STRING>,
        "color": <STRING>,
        "createdBy": <STRING>,
        "createdOn": <INTEGER>
    }
]
```

## Add new note
`POST /api/note/add`
### Request
```
{
    "title": <STRING>,
    "content": <STRING>,
    "color": <STRING> 
}
```
### Response
```
New note added
```

## Delete note
`DEL /api/note/delete/{id}`
### Request
```
None
```
### Response
```
Note deleted
```

## Update note
`PUT /api/note/update/{id}`
### Request
```
{
    "id": <INTEGER>,
    "title": <STRING>,
    "content": <STRING>,
    "color": <STRING>
}
```
### Response
```
Note updated
```
