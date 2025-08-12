import { prismaClient } from "database/client";
import express from "express"

const app = express();
app.use(express.json());

app.get("/",async (req,res)=>{
    console.log("hiiii backend");
    const users =await prismaClient.user.findFirst({})
    res.send(users);
    console.log(users);
})
app.post("/add",async (req,res)=>{
    console.log("hiiii backend");
    const users =await prismaClient.user.create({
        data:{
            username:"sanket",
            password:"123456"
        }
    })
    res.send(users)
    console.log(users);
})

app.listen(8080);