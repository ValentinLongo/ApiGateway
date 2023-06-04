import express from "express";
import indexRouter from "./src/routes/index.route.js"

const app = express();

app.set("port", process.env.PORT || 3000);

app.use("/",indexRouter)

app.listen(app.get("port"),() =>{
    console.log("Todo Ok", app.get("port"))
});