# Admin CMS API

This backend API is created for SWAPI-SWAP Admin CMS panel.

## API end points

### Admin API endpoints

All the API endpoints will be followed by `${rootUrl}/api/v1/admin`

| #   | API | Method | Description       |
| --- | --- | ------ | ----------------- |
| 1.  | `/` | GET    | Get all admins    |
| 2.  | `/` | POST   | Create new admins |



### Category API endpoints

All the API endpoints will be followed by `${rootUrl}/api/v1/category`

| #   | API | Method | Description       |
| --- | --- | ------ | ----------------- |
| 1.  | `/:_id?` | GET    | Get single catagory if _id is provided, otherwise return all the categories    |
| 2.  | `/` | POST   | Create new Category in database |
| 3.  | `/` | PATCH   | Update category in database |
| 4.  | `/:_id` | DELETE   | DELETE category in database |
