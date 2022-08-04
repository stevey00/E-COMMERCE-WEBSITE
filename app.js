// Main modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
// const expressHbs = require("express-handlebars");
// const hbs = require("hbs");

app.use(bodyParser.urlencoded({ extended: false }));

//template engines pug, handlebars, ejs
// app.set("view engine", "pug");
// app.set("views", "views");

// app.engine("handlebars", expressHbs.engine());
// app.set("view engine", "handlebars");
// app.set("views", "views");

app.set("view engine", "ejs");
app.set("views", "views");

// application files
const shopRouter = require("./routes/shop");
const adminRouter = require("./routes/admin");
const errorController = require("./controllers/404");

app.use(express.static(path.join(__dirname, "public")));
app.use(adminRouter);
app.use(shopRouter);

app.use(errorController.getError);

app.listen(3000);
