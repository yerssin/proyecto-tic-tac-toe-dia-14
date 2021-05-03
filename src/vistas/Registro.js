import React from 'react';
import './Registro.css';


function Registro({ iniciarJuego }) {
    return <div>

        <div className="cajaUsuarios">
            <h4>JUGADORES</h4>
            <div>
                <input type="text" placeholder="Jugador 1" />
                <input type="text" placeholder="Jugador 2" />
            </div>
            <div className="botones">
                <button onClick={() => iniciarJuego(true)} className="x">x</button>
                <button onClick={() => iniciarJuego(false)} className="o">o</button>
            </div>

        </div>
    </div>

}

export default Registro;