const express = require("express");
const app = express();
const ConnectDB = require("./mongoose");
const users = require("./Routes_Art_Wear/users");
const products = require("./Routes_Art_Wear/search")
const Commande = require("./Routes_Art_Wear/Commande")

//connecting to database
ConnectDB();

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false })); // never forget this line to parse JSON req body


app.use("/artwear", users);
app.use("/artwear", products);
app.use("/artwear", Commande);


app.listen(PORT, () => console.log("server is runnig on port " + PORT));
