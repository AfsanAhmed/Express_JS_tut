const express = require('express');
const router = express.Router();


router.get("/about", (req,res) =>{
    
    res.status(200).json({
        message : "Rossi",
        statuscode : 200,
    });
});
router.get("/userId/:id/password/:pd", (req,res) =>{

   // const {name, age} = req.query;         //request with query parameter

   // res.send(`Your name : ${name} and Age : ${age}`); //response with query result


   const id = req.params.id;                 //requst with route parameter
   const pd = req.params.pd;

   res.send(`<h1>Your id : ${id} and password : ${pd} </h1>`);

   const name = req.header('name');
   const age = req.header('age');
   res.send(`<h1>Your name : ${name} and age : ${age} </h1>`);

}) ;
// request with Header
router.get("/username", (req,res) =>{
 
    const name = req.header('name');
    const age = req.header('age');
    res.send(`<h1>Your name : ${name} and age : ${age} </h1>`);
 
 });


router.post("/", (req,res) =>{
    res.send("I AM AT HOME POST ROUTE");
    res.end();
});
router.put("/", (req,res) =>{
    res.send("I AM AT HOME PUT ROUTE");
});
router.delete("/", (req,res) =>{
    res.send("I AM AT HOME DELETE ROUTE");
});

module.exports = router;