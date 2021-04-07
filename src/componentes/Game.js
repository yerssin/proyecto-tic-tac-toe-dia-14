import React, { useState } from 'react';
import { calculateWinner } from './helpers';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px Auto',
    color: "black",
    fontSize: '17px',


};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = i => {
        const boardCopy = [...board];
        //if user click an occupied square or if game is won, return.
        if (winner || boardCopy[i]) return;
        //put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'x' : 'o';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Iniciar Juego
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={styles}>
                <p>{winner ? 'GANADOR: ' + winner : 'Es el turno de: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}

            </div>
        </>
    )
}
export default Game;