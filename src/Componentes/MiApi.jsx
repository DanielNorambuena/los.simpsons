import React, { useState, useEffect } from 'react'
import cuadro from '../assets/img/cuadro.png'


const MiApi = ({ valorBusqueda }) => {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=7");
        const data = await res.json();

        setPersonajes(data);
        console.log(data);

    }

    return (
        <div className='contenedor'>
            <div className=''>
                {
                    personajes
                        .filter((p, i) => {
                            return p.character.toLowerCase().includes(valorBusqueda.toLowerCase());
                        })
                        .sort((a, b) => a.character.localeCompare(b.character))
                        .map((p, i) => {
                            return (
                                <div key={i} className='contenedor-info'>
                                    <div className='contenedor-img'>
                                        <img src={cuadro} className='foto1' alt="..." />
                                        <img src={p.image} className='foto2' alt="..." />
                                    </div>
                                    <div className='contenedor-texto'>
                                        <h3 className=''>{p.character}</h3>
                                        <p className=''>{p.quote}</p>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}

export default MiApi

