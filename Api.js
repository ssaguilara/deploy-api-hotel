//* se importa el paquete de express
import express from "express";
import cors from "cors";

import { rutas } from "./routes/rutas.js";
import { establecerConexion } from "./database/conexion.js";

export class Api {
  constructor() {
    //* aqui van los atributos del objeto
    this.app = express();
    this.conectarBD();
    this.procesarPeticiones();
  }

  levantarServidor() {
    this.app.listen(process.env.PORT, () => {
      console.log("servidor operando con exito");
    });
  }
  procesarPeticiones() {
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use("/", rutas);
  }
  conectarBD() {
    establecerConexion();
  }
}
