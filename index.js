let express = require("express");
let bodyParser = require('body-parser');
let app = express();
let appRoutes = require('./routes/app');
let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';

let hbs = exphbs.create({extname: extNameHbs});

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', appRoutes);


app.listen(3000, () =>{
    console.log("Live server on 3000");
});
