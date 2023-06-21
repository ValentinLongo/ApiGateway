import { Router } from "express";
import axios from "axios";
const microservicioRouter = Router();

//--------- Usuarios - ROLDAN Y GARAFFINI -----------

microservicioRouter.get("/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://api-redes-usuarios-nachewien.vercel.app/api/usuario/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.post("/nuevo", async(req, res) => {
    try {
      const body = req.body;
      const response = await axios.post("https://api-redes-usuarios-nachewien.vercel.app/api/usuario/nuevo", body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  });

  microservicioRouter.delete("/borra/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`https://api-redes-usuarios-nachewien.vercel.app/api/usuario/borra/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.put("/actualiza", async (req, res) => {
    try {
      const body = req.body;
      console.log('Datos recibidos:', body);
      const response = await axios.put(`https://api-redes-usuarios-nachewien.vercel.app/api/usuario/actualiza`, body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });
export default microservicioRouter;