import express from "express";
const app = express();
const PORT= process.env.PORT? +process.env.PORT:8000;
app.listen(PORT,()=>{
    console.log(`server is running on PORT : ${PORT}`);
})
app.get("/",(req,res)=>{
    return res.json({
        "message" : "you are on home page ....",
    })
})
app.get("/health",(req,res)=>{
    return res.json({
        msg:"everything is good",
    })
})