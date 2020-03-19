<h1 align="center">Stub rest api</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Stub rest data api

## Install

```sh
brew install npm
brew install curl
npm install json-server
npm install .
```

## Usage

```sh
npm json-server generate.js

or execute:
./install.sh

Test api:
get:
curl http://localhost:3000/organizations
post:
curl -d '{"name": "GoDaddy", "phone": "0000"}' -X POST -H "Content-Type: application/json" http://localhost:3000/organizations
put:
curl -d '{"id": "{id}", "name": "GoDaddy", "phone": "1111"}' -X PUT -H "Content-Type: application/json" http://localhost:3000/organizations/{id}
delete:
curl -d '{"id": "{id}"}' -X DELETE -H "Content-Type: application/json" http://localhost:3000/organizations/{id}
```

## How to use json-server
https://egghead.io/lessons/javascript-creating-demo-apis-with-json-server


## Docker

https://hub.docker.com/r/rivancic/json-server-faker/

## Author

👤 **Fenrir Team**
