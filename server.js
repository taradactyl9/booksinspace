const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(3000, function*(){
    console,log('Books in Space API is now listening on port 3000...');
})