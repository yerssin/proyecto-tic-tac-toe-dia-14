
import React from 'react';

const style = {
    background: 'black',
    border: '2px solid darkgray',
    fontSize: '40px',
    cursor: 'pointer',
    outline: "none",
    color: 'orange'


};

const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;