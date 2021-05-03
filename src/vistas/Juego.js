import React, { useState } from 'react';
import { calculateWinner } from '../componentes/helpers';
import Board from '../componentes/Board';

const styles = {
    width: "200px",
    margin: "20px auto",
}

const Juego = ({ iniciaX }) => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(iniciaX);
    const winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'x' : 'o';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }


    const renderMoves = () => (
        <button style={{ color: 'black' }} onClick={() => setBoard(Array(9).fill(null))}>
            Inicio de Juego
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'winner: ' + winner : 'Tu turno: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}

            </div>
        </>
    )
}

export default Juego;