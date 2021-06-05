import React, { useState } from 'react'

export const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const validar = event => {
        event.preventDefault();
        console.log("Botón de enviar pulsado");
        if(!nombre.trim()){
            console.log("El campo nombre está vacío.");
            return;
        }
        if(!edad.trim()){
            console.log("El campo edad está vacío.");
            return;
        }
    }

    return (
        <div className="container">
            <form onSubmit={validar} className="form-group d-grid gap-2 col-6 mx-auto">
                <label htmlFor="">Nombre y Apellido</label>
                <input 
                placeholder="Juan Pérez" 
                className="form-control mb-3" 
                type="text"
                onChange = { e => {setNombre(e.target.value)}}
                />

                <label htmlFor="">Edad</label>
                <input 
                placeholder="19" 
                className="form-control mb-3" 
                type="text"
                onChange = { e => {setEdad(e.target.value)} }
                />

                <input className="btn btn-success mb-3" type="submit" value="Enviar" />
            </form>
        </div>
    )
}
