import { Router } from "express";
import axios from "axios";
const microservicioRouter = Router();

//--------- Catalogo de películas - BENAVIDEZ Y VAUDAGNA-----------

microservicioRouter.get("/", async (req, res) => {
    try {
      const response = await axios.get("http://localhost:4001/api/pelicula");
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`http://localhost:4001/api/pelicula/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/titulo/:nombre", async (req, res) => {
    try {
      const {nombre} = req.params; 
      const response = await axios.get(`http://localhost:4001/api/pelicula/titulo/${nombre}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.post("/", async (req, res) => {
    try {
      const { body } = req; 
      const response = await axios.post("http://localhost:4001/api/pelicula", body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.put("/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const { body } = req; 
      const response = await axios.put(`http://localhost:4001/api/pelicula/${id}`, body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`http://localhost:4001/api/pelicula/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });
export default microservicioRouter;