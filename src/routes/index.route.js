import { Router } from "express";
import microservicio1 from "./micro1.route.js"
const indexRouter = Router();

indexRouter.get("/",(req,res) => {
    res.send("Inicio a API")
})

indexRouter.use("/microservicio1", microservicio1);

export default indexRouter;