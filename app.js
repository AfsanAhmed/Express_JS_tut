const express = require("express");
const router = require("./routes/users.route");
const app = express();

app.use("/api/user",router);

app.use("/", (req,res) =>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/index.html");
});
app.use((req,res) =>{

    res.send("<h2> 404::::::PAGE NOT FOUND </h2>");

});
module.exports = app;