import React from 'react';
import './masterthesis.scss';

const Masterthesis = (props) => {
  return (
    <div className='container'>
        <div className='card-2'>
            <h3> For my master thesis </h3>
            <p>{props.text}</p>
        </div>
    </div>
  );
};

export default Masterthesis;
