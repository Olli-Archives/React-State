import React from 'react';
import styles from './ColorDiv.css';
import PropTypes from 'prop-types';

export default function ColorDiv({ color }){
 

  console.log('props in color div', color);
  return (
    <div className={styles[color]}> 

    </div>
  );
}

ColorDiv.propTypes = {
  color: PropTypes.string.isRequired
}
;
