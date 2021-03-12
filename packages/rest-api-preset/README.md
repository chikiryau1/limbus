
# Preset for REST API

The project is designed to quickly start the development of the REST API using Node.js (Express) and MongoDB (Mongoose).

## Config
### Core: 
- Express.js 
- Mongoose (Mongodb)

### Utils:
- Nodemon (to provide hot reloading)
- Cors (to support preflight OPTIONS requests)
- Babel 
- Lodash 

## How to use
```
npm install
```
```
npm start
```
Default localhost port is 8000.
Default database name in dbName.

### Insert json file in MongoDB:
Move to bash directory, then run shell script insertInBase with args.

#### Signature
```
./insertInBase <dataBaseName> <collectionName> <pathToJson>
```
