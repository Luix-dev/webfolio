import React from 'react';
import './CitationNumber.scss';


const CitationNumber = (props) => {
  return (
    <div className='citationnumber'>
        #{props.number}
    </div>
  );
};

export default CitationNumber;
