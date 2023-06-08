import { Router } from "express";

const microservicioRouter = Router();

microservicioRouter.get("/",(req,res) => {
    res.send("Microservicio 5")
})

export default microservicioRouter;