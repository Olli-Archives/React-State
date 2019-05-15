import React, { PureComponent } from 'react';
import ColorDiv from './ColorDiv';
import ColorPicker from './ColorPicker';

export default class ColorContainer extends PureComponent{
  state={
    color:''
  }
 
  onClickHandler = (newColor)=>{
    this.setState({ color: newColor });
    console.log(this.state.color);
  }



  render(){
    return (
      <div>
        <ColorPicker color='red' onClick={this.onClickHandler}/>
        <ColorPicker color='blue' onClick={this.onClickHandler}/>
        <ColorPicker color='green' onClick={this.onClickHandler}/> 
        <ColorDiv color={this.state.color}/>
      </div>    
    );
  }
}
