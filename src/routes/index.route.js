import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/",(req,res) => {
    res.send("Inicio a API")
})


export default indexRouter;