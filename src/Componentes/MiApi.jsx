import React, { useState, useEffect } from 'react'
import cuadro from '../assets/img/cuadro.png'


const MiApi = ({ valorBusqueda }) => {
    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=8");
        const data = await res.json();

        setPersonajes(data);
        console.log(data);
    }

    return (

        <div className=''>
            {
                personajes
                    .filter((p, i) => {
                        return p.character.toLowerCase().includes(valorBusqueda.toLowerCase());
                    })

                    .map((p, i) => {
                        return (
                            <div key={i} className=''>
                                <div className=''>
                                    <img src={cuadro} className='' alt="..." />
                                    <img src={p.image} className='' alt="..." />
                                </div>
                                <div className=''>
                                    <h5 className=''>{p.character}</h5>
                                    <p className=''>{p.quote}</p>
                                </div>
                            </div>
                        )
                    })

            }

        </div>


    );

}

export default MiApi

