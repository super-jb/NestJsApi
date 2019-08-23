## Description
NestJs Api with Swagger implementation

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API

POST
api/v1/products
{
	"title": "this is a title",
	"description": "this is a description",
	"price": 45.23
}

GET
api/v1/products

GET by Id
api/v1/products/{id}

PATCH
api/v1/products/{id}
{
  "id": 123,
	"title": "this is a title",
	"description": "this is a description",
	"price": 45.23
}

DELETE
api/v1/products/{id}

## Swagger  
http://localhost:3000/api/