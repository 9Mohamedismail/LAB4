# CISC3140-Lab3
## Purpose
The purpose of this repository is to create an API that would allow people to keep track of data about squirrels on campus using the MongoDB. The API need to have common database operation like Create, Read, Update, and Delete record.

## Set up the API
1. Download the repository as a zip file and unzip the file
2. Open terminal and use cd command to change directory to the downloaded file
3. Run `chmod +x setup.sh`
4. Run `./setup.sh` and then the local server will start

## Endpoints
### Get
`localhost:3000/squirrels` - show all of the squirrel datas in the database.
`localhost:3000/squirrels/id` - show only the squirrel data that matches the id.<br>
Ex: `localhost:3000/squirrels/1` - show the squirrel data where the squirrel_id is equal to 1.

### Post
`localhost:3000/squirrels` - add new squirrel data to the database, but it require a body with the data.<br>
Example of the body:
```
{"squirrel_id":101,
 "time":"AM",
 "date":11012023,
 "age":"Adult",
 "primary_fur_color":"Gray",
 "highlight_fur_color":"White",
 "nearby_building":"Ingersoll Hall",
 "above_ground":false
}
```
The data need to be inside of a curly brackets.<br>
All the name of the data field need to be inside of double quotes.<br>
The data need to be inside of double quotes if its a string. Otherwise you don't need double quotes.<br>

### Update
`localhost:3000/squirrels/id` - Update the squirrel data with the specify id with the data in the body.<br>
Ex: `localhost:3000/squirrels/1`<br>
Body:
```
{"nearby_building":"Boylan Hall",
 "above_ground":false
}
```
This will only change the nearby_building and above_ground field for the squirrel data that has a squirrel_id equal to 1. All other field in the data will remain the same.

### Delete
`localhost:3000/squirrels/id` - delete the squirrel data that has that specify id.
