import { Fragment, useState } from "react"

import MostrarUsuario from "./MostrarUsuario";

function Crud() {
    const [nombre, setNombre]     = useState('');
    const [apellido, setApellido] = useState('');
    const [estado, setEstado]     = useState([]);
  
    function agregarUsuario(e){
      e.preventDefault();
      
      let usuario = {
        nombre:   nombre,
        apellido: apellido
      }
      setEstado([...estado, usuario]);
    }
    // const  mostrarUsuario = () =>{
    //   Estado.map(item =>(
    //     <li key={item.Nombre}>{item.Nombre} - {item.Apellido}</li>
    //   ))
    // }
  
    return (
      
      <Fragment>
      <form action="" onSubmit={(e) => agregarUsuario(e)}>
        <h1>Registro de usuario</h1>
        <input onChange={(e) => setNombre(e.target.value)} name="nombre" id="nombre" type="text" placeholder="Ingresa tu nombre"/><br></br><br></br>
        <input onChange={(e) => setApellido(e.target.value)} name="apellido" id="apellido" type="text" placeholder="Ingresa tu apellido"/><br></br><br></br>
        <input type="submit" value="Aceptar" />
        
      </form>
      <div>
        <h1>Lista de datos</h1>
        <ul>
        { 
         estado.map(user => (
          <li key={user.nombre}> {user.nombre +" "+ user.apellido} </li>
         ))
          
        }
        </ul>
      </div>
      </Fragment>
      
    )
  }
export default Crud