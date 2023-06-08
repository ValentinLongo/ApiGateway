import { Router } from "express";

const microservicioRouter = Router();

microservicioRouter.get("/",(req,res) => {
    res.send("Microservicio 2")
})

export default microservicioRouter;