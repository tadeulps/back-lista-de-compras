import express from "express";
import cors from "cors";

import connection from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/items",async (req,res)=>{
    try{
    const {items}=req.body;
    await connection.query(`INSERT INTO compras (items) 
    VALUES ($1)`,[items]);
    res.sendStatus(201)
    }catch(error){
    console.log(error)
    res.sendStatus(500)
    }
});


export default app;
