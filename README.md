# MERN 
## Full stack Web Development

### Setup Backend Dependecies
```bash
$ npm init -y // This is for create package.json file
$ npm install express // Install express 
$ npm install -D concurrently nodemon // installing Dependencies -concurrently following to allows multiple command to start both frontend and backend. and another -nodemon monitor to changes and restart the server.
```
### Updated the package.json file
```bash
{
  "name": "mernapp",
  "version": "1.0.0",
  "description": "MERN App",
  "main": "server.js",
  "scripts": {
    "server": "nodemon"
  },
  "keywords": [],
  "author": "Mohammad",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.1"
  },
  "devDependencies": {
    "concurrently": "^9.1.0",
    "nodemon": "^3.1.7"
  }
}
```
<ul>
  <li>Crete a server.js file into the root directory</li>
  <ol>
    <li>Load the Express library and store it in a variable name express: const express = require('express');</li>
    <li>Initialize the app: const app = express();</li>
    <li>Set a PORT: const PORT = process.env.PORT || 3000;</li>
  </ol>
</ul>

### Test with a HTTP server method GET
In the server method has two parameter first one is the selected path and another one can take a call back function which is determined req (request) and res (response) of the returning. 
```bash
- To print Hello World!
  app.get('/',(req,res)=> res.send("Hello World!");
```

