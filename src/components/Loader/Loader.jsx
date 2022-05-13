import React from 'react';
import './style.scss';

function Loader({small}) {
  return (
    <div className={small ? null : "loader_wrapper"}>
      <div className='center'>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Loader;