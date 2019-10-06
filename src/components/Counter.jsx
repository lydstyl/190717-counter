import React from 'react';

const Counter = props => {
  return (
    <div className='counter' data-key={props.dataKey}>
      <div onClick={props.handler} className='button remove'>
        Remove
      </div>
      <div className='counterBox'>
        <h2 className='name'>{props.name}</h2>
        <div className='number'>{props.number}</div>
        <div className='button plus' onClick={props.increase}>
          +
        </div>
        <div className='button minus' onClick={props.decrease}>
          -
        </div>
      </div>
    </div>
  );
};

export default Counter;
