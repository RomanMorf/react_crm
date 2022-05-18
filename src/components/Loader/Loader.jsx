import React from 'react';
import './style.scss';

function Loader({large}) {
  return (
    <div className={large ? "loader_wrapper" : null}>
      <div className='center'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Loader;