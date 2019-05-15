import React from 'react';
import styles from './ColorDiv.css';
import PropTypes from 'prop-types';

export default function ColorDiv({ color, clicks }){
 

  console.log('props in color div', color);
  return (
    <div className={styles[color]}> 
      {clicks}
    </div>
  );
}

ColorDiv.propTypes = {
  color: PropTypes.string.isRequired,
  clicks: PropTypes.number.isRequired
}
;
