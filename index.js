const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoConnect = require('./utils/database').mongoConnect;


const MainRoute = require("./routes/mainRoute");

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(MainRoute);

mongoConnect(() => {
    app.listen(3000)
})