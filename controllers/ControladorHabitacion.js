//* los controladores nos ayudan a revisar la información que nos llega de los request para que no vaya a haber ningun problema o vulnerabilidad
import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
  constructor() {}
  async registrarHabitacion(request, response){
    try{
      let servicioHabitacion = new ServicioHabitacion()
      //* 1. esculcar los dats que se quieren usar para el registro
      let datosHabitacionRegistrar = request.body
      //* 2. validar los datos
      //* 3. se intenta enviar los datos a la base de datos si estan correctos o si no hay algun error
      await servicioHabitacion.registrarHabitacion(datosHabitacionRegistrar)
      //* 4. responder 
      response.status(200).json({
        'mensaje' : 'exito en la operacion de registro',
        'datos' : datosHabitacionRegistrar
      })
    }catch(error){
      response.status(400).json({
        'mensaje' : 'error en la operacion de registro: ' + error
      })
    }
  }

  async buscarHabitaciones(request, response){
    try{
      let servicioHabitacion = new ServicioHabitacion()
      //* 1. intentar buscar los datos en BD
      //* 2. responder
      response.status(200).json({//* el .JSON se utiliza para poder guardar los datos, ya que guardan como objeto
        'mensaje' : 'exito en la operacion de busqueda',
        'datos' : await servicioHabitacion.buscarHabitaciones()
      })
    }catch(error){
      response.status(400).json({
        'mensaje' : 'error en la operacion de busqueda: ' + error
      })
    }
  }

  async buscarHabitacionId(request, response){
    try{
      let servicioHabitacion = new ServicioHabitacion()
      //* 1. esculcar los parametros de la peticion
      let idBuscarHabitacion = request.params.id
      //* 2. validar que el dato sea correcto
      //* 3. intento buscar el dato en BD
      //* 4. responder
      response.status(200).json({
        'mensaje' : 'exito en la operacion de buscar por id',
        'datos' : await servicioHabitacion.buscarHabitacionId(idBuscarHabitacion)
      })
    }catch(error){
      response.status(400).json({
        'mensaje' : 'fallamos en la operacion de buscar por id: ' + error
      })
    }
  }

  async modificarHabitacion(request, response){
    try{
      let servicioHabitacion = new ServicioHabitacion()
      //* 1. traigo el id a editar de la peticiones
      let idHabitacionModificar = request.params.id
      let datosHabitacionModificar = request.body
      //* 2. validar los datos 
      //* 3. buscar y modificar en BD
      await servicioHabitacion.modificarHabitacion(idHabitacionModificar,datosHabitacionModificar)
      // responder
      response.status(200).json({
        'mensaje' : 'exito en la operacion de modificar',
        'datos' : datosHabitacionModificar
      })
    }catch(error){
      response.status(400).json({
        'mensaje' : 'Error en la operacion de modificar: ' + error
      })
    }
  }

  async borrarHabitacion(request, response){
    try{
      let servicioHabitacion = new ServicioHabitacion()
      let idHabitacionBorrar = request.params.id
      //* validar
      //* intento borrar la habitacion en BD
      await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)
      //* responder
      response.status(200).json({
        'mensaje' : 'exito en la operacion de borrado',
        'datos': "se ha eliminado la habitacion con id: " + idHabitacionBorrar
      })
    }catch(error){
      response.status(400).json({
        'mensaje' : 'Error en la operacion de borrado: ' + error
      })
    }
  }
}