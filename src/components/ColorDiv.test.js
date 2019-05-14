import React from 'react';
import { shallow } from 'enzyme';
import ColorDiv from './ColorDiv';

describe('color div  component', ()=>{
  it('renders color div container', ()=>{
    const wrapper = shallow(<ColorDiv color='blue' clicks={0}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
