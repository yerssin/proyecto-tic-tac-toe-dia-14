import React from 'react';



const style = {
    background: 'lightgray',
    border: '2px solid darkgray',
    fontSize: '60px',
    cursor: 'pointer',
    color: 'orange',
}

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}

    </button>
);

export default Square;