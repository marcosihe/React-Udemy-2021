import React, { Fragment } from 'react';

export const Hola = () => {
    let saludo = "Hola mundo";
    return (
        <Fragment>
            <p>{saludo} y bienvenidos a mi primer proyecto con React</p>
            <p>A continuación se muestra el uso de un mismo componente "Contador", 
                utilizado más de una vez.
            </p>
        </Fragment>
    )
}
