import React, { PureComponent } from 'react';
import ColorDiv from './ColorDiv';
import ColorPicker from './ColorPicker';

export default class ColorContainer extends PureComponent{
  state={
    color:'',
    clicks:0
  }
 
  onClickHandler = (newColor)=>{
    let clickCount = this.state.clicks;
    clickCount++;
    this.setState({
      color: newColor,
      clicks: clickCount
    });
    console.log(this.state.color);
  }



  render(){
    const { color, clicks } = this.state;
    return (
      <div>
        <ColorPicker color='red' onClick={this.onClickHandler}/>
        <ColorPicker color='blue' onClick={this.onClickHandler}/>
        <ColorPicker color='green' onClick={this.onClickHandler}/> 
        <ColorDiv color={color} clicks={clicks}/>
      </div>    
    );
  }
}
