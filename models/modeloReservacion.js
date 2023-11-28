import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reservacion = new Schema({
    nombreCliente : {
        type: String,
        required: true,
      },
      fechaEntrada : {
        type: Date,
        required: true
      },
      fechaSalida : {
        type:Date,
        required:true
      },
      costo : {
        type:Number,
        required:false
      },
      cantidadPersonas : {
        type:Number,
        required:true
      },
      costoTotal : {
        type: Number,
        required: false
      }
})

export const  modeloReservacion = mongoose.model('reservaciones', Reservacion)