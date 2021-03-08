const path = require('path');
const express = require('express');

const app = express();
const router = require("./router");

app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, '../public')));
app.use("/", router);

app.listen(3000, () => {
    console.log("The server is now running on Port 3000");
}); 