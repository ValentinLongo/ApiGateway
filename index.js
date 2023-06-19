import express from "express";
import indexRouter from "./src/routes/index.route.js"
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: '*', // Permitir todas las solicitudes
  methods: 'GET,POST,PUT,DELETE', // Métodos permitidos
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version', // Encabezados permitidos
  credentials: true // Permitir envío de cookies y credenciales
};

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set("port", process.env.PORT || 3000);

app.use("/",indexRouter)

app.listen(app.get("port"),() =>{
    console.log("Todo Ok", app.get("port"))
});