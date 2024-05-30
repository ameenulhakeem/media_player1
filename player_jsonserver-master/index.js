
// import json-server package
const jsonServer = require('json-server');
// create json server
const mediaPlayerServer = jsonServer.create();
// create a connection to db.json file
const router = jsonServer.router('db.json');
// create a middleware : intermediate function inorder to use all this created object
const middleware = jsonServer.defaults()
// use this middleware
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

const port = 5000;
mediaPlayerServer.listen(port,()=>{
    console.log(`json server is up and unning in port ${port}`);
})