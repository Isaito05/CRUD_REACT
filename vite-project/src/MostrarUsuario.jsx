import { Fragment } from "react";
import Crud from "./Crud";


function MostrarUsuario(){
    
    return(
        <Fragment>
            {user.map((estado) => (
                    <h1 Key={estado.nombre}>{estado.apellido} </h1>
            ))}

        </Fragment>
    )
}

export default MostrarUsuario