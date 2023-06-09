import express from "express";
import indexRouter from "./src/routes/index.route.js"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set("port", process.env.PORT || 3000);

app.use("/",indexRouter)

app.listen(app.get("port"),() =>{
    console.log("Todo Ok", app.get("port"))
});