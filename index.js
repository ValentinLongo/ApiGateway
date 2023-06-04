import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000);

app.use("/",(req,res) =>{
    res.send("LLegamo")
})

app.listen(app.get("port"),() =>{
    console.log("Todo Ok", app.get("port"))
});