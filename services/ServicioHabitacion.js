import { modeloHabitacion } from "../models/modeloHabitacion.js";

export class ServicioHabitacion{
    constructor(){}

    async registrarHabitacion(datos){
        let habitacionNueva = modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async buscarHabitaciones(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }
    async buscarHabitacionId(id){
        let habitacionId = await modeloHabitacion.findById(id)
        return habitacionId
    }
    async modificarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }

    async borrarHabitacion(id){
        return await modeloHabitacion.findByIdAndDelete(id)
    }
}