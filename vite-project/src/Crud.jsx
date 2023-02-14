import { Fragment, useState } from "react"

import MostrarUsuario from "./MostrarUsuario";

function Crud(props){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [estado, setEstado] = useState([]);

    function agregarUsuario(e){
        e.preventDefault();
        const usuario = {
            nombre:nombre,
            apellido:apellido
        }
        setEstado([...estado, usuario]);
    }

    return(
        <Fragment>
            <form action="" onsubmit={(e) => agregarUsuario(e)}>
                <h1>Agregar usuario</h1>
                <input onChange={(e) => setNombre(e.target.value)} type="text" name="nombre" id="nombre" placeholder="Ingresa nombre"/><br/><br/>
                <input onChange={(e) => setApellido(e.target.value)} type="text" name="apellido" id="apellido"  placeholder="Ingresa apellido"/><br/><br/>
                <button>Aceptar</button>
            </form>
            <div>
            <ul>
             {
            estado.map((user) => (
            <li  Key={user.nombre}>{user.apellido} </li>
            ))
            }
            </ul>
           
            </div>
            

        </Fragment>

    )

}
export default Crud