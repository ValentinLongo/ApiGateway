import { Router } from "express";
import microservicio1 from "./micro1.route.js"
import microservicio2 from "./micro2.route.js"
import microservicio3 from "./micro3.route.js"
import microservicio4 from "./micro4.route.js"
import microservicio5 from "./micro5.route.js"
import microservicio6 from "./micro6.route.js"
import microservicio7 from "./micro7.route.js"

const indexRouter = Router();

indexRouter.get("/",(req,res) => {
    res.send("Inicio a API")
})

indexRouter.use("/peliculas", microservicio1);
indexRouter.use("/estadisticas", microservicio2);
indexRouter.use("/usuario", microservicio3);
indexRouter.use("/microservicio4", microservicio4);
indexRouter.use("/microservicio5", microservicio5);
indexRouter.use("/microservicio6", microservicio6);
indexRouter.use("/microservicio7", microservicio7);

export default indexRouter;