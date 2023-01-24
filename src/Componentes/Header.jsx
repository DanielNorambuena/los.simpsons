import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = ({ setValorBusqueda }) => {
    const [valorCaja, setValorCaja] = useState('');

    return (
        <div className='presentacion'>
            <p>Hola señor Thompson...<br />
                Lo invitamos a buscar a los personajes de los Simpsons</p>
            <div className='botones'>
                <Form.Control type="texto"
                    placeholder="Nombre del personaje"
                    onChange={(e) => setValorCaja(e.target.value)}
                />
                <Button variant="primary"
                    className=''
                    type="submit"
                    onClick={() => setValorBusqueda(valorCaja)}
                >
                    Buscar
                </Button>
            </div>
            <p className='sub-titulo'>¡Que elegancia la de Francia!</p>
        </div>
    )
}

export default Header