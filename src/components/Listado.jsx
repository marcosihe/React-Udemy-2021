import React, { Fragment, useState } from 'react'

export const Listado = () => {
    const [numeros, setNumeros] = useState([10,20,30,40,50,60]);
    return (
        <Fragment>
            <ul>
                {
                    numeros.map ( (item, index) => 
                    <li key={index}>
                        {item} - {index}
                    </li>
                    )
                }
            </ul>
        </Fragment>
    )
}
