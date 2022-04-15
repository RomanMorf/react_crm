import React from 'react';
import './style.scss';

function Loader() {
  return (
    <div className="loader_wrapper">
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader;