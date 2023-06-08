import { Router } from "express";

const microservicioRouter = Router();

microservicioRouter.get("/",(req,res) => {
    res.send("Microservicio 3")
})

export default microservicioRouter;