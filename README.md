# API
## Retrieve all colors
`GET /color/getAll`
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
`GET /note/getAll`
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
`POST /note/add`
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
`DEL /note/delete/{id}`
### Request
```
None
```
### Response
```
Note deleted
```

## Update note
`POST /note/update`
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
