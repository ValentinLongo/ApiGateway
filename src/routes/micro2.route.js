import { Router } from "express";
import axios from "axios";
const microservicioRouter = Router();

//--------- Estadisticas - CIPOLETTI Y IRUSTA -----------

microservicioRouter.get("/totalUsuariosRegistrados", async (req, res) => {
    try {
      const response = await axios.get("https://estadisticasbackend.vercel.app/api/estadisticas/totalUsuariosRegistrados");
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/totalPeliculasVisualizadas/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/totalPeliculasVisualizadas/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/totalResenasPorUsuario/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/totalResenasPorUsuario/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/generoPreferido/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/generoPreferido/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/calificacionPelicula/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/calificacionPelicula/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/tendencias", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/tendencias`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/generoTendencias", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/generoTendencias`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/populares", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://estadisticasbackend.vercel.app/api/estadisticas/populares`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

export default microservicioRouter;