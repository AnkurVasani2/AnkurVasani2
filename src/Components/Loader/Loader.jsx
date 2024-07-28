import React from 'react';
import '../Loader/Loader.css';
import loader from './../../assets/loader.gif';

const Loader = ({ loading }) => {
  return (
    <div className={`Loader ${loading ? 'loading' : 'loaded'}`}>
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
