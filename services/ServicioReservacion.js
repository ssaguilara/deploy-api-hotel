import { modeloReservacion } from "../models/modeloReservacion.js"

export class ServicioReservacion{
    constructor(){}

    async registrarReservacion(datos){
        let reservacionNueva = new modeloReservacion(datos)
        return await reservacionNueva.save()
    }
    async buscarReservaciones(){
        let reservaciones = await modeloReservacion.find()
        return reservaciones
    }
    async buscarReservacionId(id){
        let reservacionId = await modeloReservacion.findById(id)
        return reservacionId
    }
    async modificarReservacion(id,datos){
        return await modeloReservacion.findByIdAndUpdate(id,datos)
    }

    async borrarReservacion(id){
        return await modeloReservacion.findByIdAndDelete(id)
    }
}