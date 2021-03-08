const path = require('path');
const express = require('express');
const {newsRouter,userRouter} = require('./src/routes');
const {config} = require('./config');

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/assets', express.static(path.join(__dirname, './public')));
app.set("views", "views")
app.set("view engine", "hbs")

app.use("/", newsRouter);
app.use("/users", userRouter);

app.listen(config.port, () => {
    console.log(`The server is now running on Port ${config.port}`);
});