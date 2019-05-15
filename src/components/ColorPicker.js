import React, { PureComponent } from 'react';
import styles from './ColorPicker.css';
import PropTypes from 'prop-types';



export default class ColorPicker extends PureComponent{

  static propTypes = {
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }

  //{this.props.onClick.bind(null, this.props.color)}
  render(){
    const { color } = this.props;
    return (
      <section className={styles.ColorPicker}>
        <button className={styles[color]} onClick={this.props.onClick.bind(null, color)} >{this.props.color}</button> 
      </section>
    );
  }
}
