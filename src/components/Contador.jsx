import React, { Fragment, useState } from 'react'

export const Contador = () => {
    const [numero, setNumero] = useState(0);
    const Aumentar = () => setNumero(numero + 1);
    const Reducir = () => setNumero(numero - 1);
    return (
        <Fragment className="container">
            <div className="d-grid gap-2 d-md-block text-center card">
                <div className="card-body">
                    <h2 className="card-title">Cantidad del contador: {numero}</h2>
                    <button className="btn btn-success ms-3" onClick={Aumentar} >Aumentar</button>
                    <button className="btn btn-success ms-3" onClick={Reducir} >Reducir</button>
                </div>
            </div>
        </Fragment>
    )
}
