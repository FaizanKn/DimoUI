//Install express server
const express = require('express');
const path = require('path');

const app = express();

const basePath = "https://dimoapi.herokuapp.com";

 
const proxy = require('http-proxy-middleware')
var apiProxy = proxy('/api', {target: basePath});
app.use(apiProxy);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dimoUI'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/dimoUI/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8090,() => console.log("Server started"));