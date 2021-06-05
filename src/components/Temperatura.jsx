import React, { useState } from 'react'

export const Temperatura = () => {
    const [temperatura, setTemperatura] = useState(19);
    const Subir = () => setTemperatura(temperatura + 1);
    const Bajar = () => setTemperatura(temperatura - 1);
    return (
        <div className="text-center">
            <div className="alert alert-primary" role="alert">
                <h2>La temperatura es: {temperatura}ºC</h2>
                <h3>
                    {temperatura > 21 ? 'Hace calorcito' : 'Hace algo de frio'}
                </h3>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-danger btn-block" onClick={Subir}>Aumentar Temperatura</button>
                <button className="btn btn-primary btn-block" onClick={Bajar}>Reducir Temperatura</button>
            </div>
        </div>
    )
}
