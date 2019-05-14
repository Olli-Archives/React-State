import React, { PureComponent } from 'react';
import ColorDiv from './ColorDiv';
import Chance from 'chance';
const chance = new(Chance);

export default class RandomColor extends PureComponent{
state = {
  color:''
}

newColor = ()=>{
  const color = chance.color({ format: 'hex' });
  console.log('hi', this.state.color);
  this.setState({
    color:color
  });
}


componentDidMount(){
  setInterval(() => this.newColor(), 2000); 
}
componentWillUnmount(){
  clearInterval();
}
render(){
  return (
    <div>
      <ColorDiv color={this.state.color}/>
    </div>
  );
}

}
