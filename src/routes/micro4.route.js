import { Router } from "express";

const microservicioRouter = Router();

microservicioRouter.get("/getListasUsuario/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://redespython.rj.r.appspot.com/getListasUsuario/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.post("/createLista", async(req, res) => {
    try {
      const body = req.body;
      const response = await axios.post("https://redespython.rj.r.appspot.com/createLista", body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  });

  microservicioRouter.put("/updateLista", async (req, res) => {
    try {
      const body = req.body;
      console.log('Datos recibidos:', body);
      const response = await axios.put(`https://redespython.rj.r.appspot.com/updateLista`, body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.delete("/deleteLista/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`https://redespython.rj.r.appspot.com/deleteLista/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/getPeliculasPorGeneroEnListas/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://redespython.rj.r.appspot.com/getPeliculasPorGeneroEnListas/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.get("/getPeliculaLista/:id", async (req, res) => {
    try {
      const {id} = req.params; 
      const response = await axios.get(`https://redespython.rj.r.appspot.com/getPeliculaLista/${id}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });

  microservicioRouter.post("/agregarPeliculaALista", async(req, res) => {
    try {
      const body = req.body;
      const response = await axios.post("https://redespython.rj.r.appspot.com/agregarPeliculaALista", body);
      const data = response.data;
      res.send(data);
    } catch (error) {
      console.log(error)
      res.status(500).send(error);
    }
  });

  microservicioRouter.delete("/eliminarPeliculaLista/:idPelicula/:idLista", async (req, res) => {
    try {
      const { id } = req.params;
      const response = await axios.delete(`https://redespython.rj.r.appspot.com/eliminarPeliculaLista/${idPelicula}/${idLista}`);
      const data = response.data;
      res.send(data);
    } catch (error) {
      res.status(500).send("Error al realizar la solicitud al microservicio");
    }
  });
export default microservicioRouter;