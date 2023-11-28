import { ServicioReservacion } from "../services/ServicioReservacion.js"

export class ControladorReservacion{
  constructor() {}
  async registrarReservacion(request, response){
    try{

      let servicioReservacion = new ServicioReservacion()

      let datosReservacionRegistrar = request.body

      await servicioReservacion.registrarReservacion(datosReservacionRegistrar)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de registro',
        'datos' : datosReservacionRegistrar
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de registro: ' + error
      })
    }
  }
  
  async buscarReservaciones(request, response){
    try{

      let servicioReservacion = new ServicioReservacion()

      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar',
        'datos' : await servicioReservacion.buscarReservaciones()
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'error en la operacion de busqueda: ' + error
      })
    }
  }

  async buscarReservacionId(request, response){
    try{
      let servicioReservacion = new ServicioReservacion()

      let idBuscarReservacion = request.params.id

      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar por id',
        'datos' : await servicioReservacion.buscarReservacionId(idBuscarReservacion)
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la operacion de buscar por id: ' + error
      })
    }
  }
  async modificarReservacion(request, response){
    try{
      let servicioReservacion = new ServicioReservacion()

      let idReservacionModificar = request.params.id
      let datosReservacionModificar = request.body

      await servicioReservacion.modificarReservacion(idReservacionModificar,datosReservacionModificar)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de modificar',
        'datos' : datosReservacionModificar
      })
    }catch(error){
      response.status(200).json({
        'mensaje' : 'fallamos en la oprecion de edicion' + error
      })
    }
  }
  async borrarReservacion(request, response){
    try{
      let servicioReservacion = new ServicioReservacion()

      let idReservacionBorrar = request.params.id

      await servicioReservacion.borrarReservacion(idReservacionBorrar)

      response.status(200).json({
        'mensaje' : 'exito en la operacion de borrado',
        'datos': "se ha eliminado la reservacion con id: " + idReservacionBorrar
      })

    }catch(error){
      response.status(400).json({
        'mensaje' : 'Error en la operacion de borrado: ' + error
      })
    }
  }
}