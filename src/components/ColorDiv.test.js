import React from 'react';
import { shallow } from 'enzyme';
import ColorDiv from './ColorDiv';

describe('color div component', ()=>{
  it('renders color div component', ()=>{
    const wrapper = shallow(<ColorDiv/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
