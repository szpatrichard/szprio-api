# Backend server for szpr.io

## 🛠️ Get Started

1. Install the node packages

```
$ npm install
```

2. Run the server process

```
$ npm start
```

## 🗂️ Project Directory Structure

-   **Server**
    -   bin
    -   configs
    -   v1
        -   controllers
        -   models
        -   routes

## 🪧 Endpoint Routes

| Route             | HTTP Method | Description                 |
| ----------------- | ----------- | --------------------------- |
| `v1/link/:nanoId` | GET         | Redirects to a link         |
| `v1/link`         | POST        | Creates a new link document |

## 📐 Schemas

### Users Collection

```json
{
	"_id": "ObjectId",
	"name": {
		"first": "String",
		"last": "String",
		"user": "String"
	},
	"paid": "Boolean"
}
```

### Links Collection

```json
{
	"_id": "ObjectId",
	"analytics": {
		"clicks": "Number"
	},
	"date": {
		"createdAt": "Date",
		"updatedAt": "Date"
	},
	"link": "String",
	"nanoId": "String",
	"user": "String",
	"title": "String"
}
```
