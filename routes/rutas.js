//* se importa el paquete de express
import express from 'express'
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReservacion} from '../controllers/ControladorReservacion.js'


//*para poder llamar a un controlador
//* debo crear un objeto de la clase controladorHabitacion

let controladorHabitacion = new ControladorHabitacion();
let controladorReservacion = new ControladorReservacion();

export let rutas = express.Router()

//se nombra el servicio y se llama el controlador para revise las peticiones, para lashabitaciones
//end points --- es el nombre que se le brinda a la ruta

rutas.post('/api/habitacion', controladorHabitacion.registrarHabitacion) 
// http://localhost:3000/api/habitacion
// {
//     "nombre": "Love",
//     "costo": 200,
//     "descripcion": "1 cama, 1 baño",
//     "foto": "Disponible",
//     "capacidad": 3
// }

rutas.get('/api/habitacion/:id', controladorHabitacion.buscarHabitacionId) 
// http://localhost:3000/api/habitacion/6539c8747cef7e64d9576920
// http://localhost:3000/api/habitacion/653723a96475adb72dbcbf75

rutas.get('/api/habitaciones', controladorHabitacion.buscarHabitaciones) 
// http://localhost:3000/api/habitaciones

rutas.put('/api/habitacion/:id', controladorHabitacion.modificarHabitacion) 
// http://localhost:3000/api/habitacion/6539c8747cef7e64d9576920
// {
//     "nombre": "Love",
//     "costo": 200,
//     "descripcion": "1 cama, 1 baño",
//     "foto": "Disponible",
//     "capacidad": 30
// }

rutas.delete('/api/habitacion/:id', controladorHabitacion.borrarHabitacion) 
// http://localhost:3000/api/habitacion/id


//se nombra el servicio y se llama el controlador para revise las peticiones, para las reservas
rutas.post('/api/reservacion', controladorReservacion.registrarReservacion)

// "2023-04-25T00:00:00.000Z"

// http://localhost:3000/api/reservacion
// {
//     "nombreCliente": "Juan",
//     "fechaEntrada": "2023-04-25",
//     "fechaSalida": "2023-04-27",
//     "costo": 65,
//     "cantidadPersonas": 12 ,
//     "costoTotal" : 650
// }

rutas.get('/api/reservacion/:id', controladorReservacion.buscarReservacionId)
// http://localhost:3000/api/reservacion/653eed5f6f98e5661e6372d5

rutas.get('/api/reservaciones', controladorReservacion.buscarReservaciones)
// http://localhost:3000/api/reservaciones

rutas.put('/api/reservacion/:id', controladorReservacion.modificarReservacion)
// http://localhost:3000/api/reservacion/653eed5f6f98e5661e6372d5
// {
//     "fechaSalida": "2023-04-30",
//     "cantidadPersonas": 2 
// }

rutas.delete('/api/reservacion/:id', controladorReservacion.borrarReservacion)
// http://localhost:3000/api/reservacion/653ef0229cc350251761fe13