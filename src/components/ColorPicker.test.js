import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from './ColorContainer';

describe('color picker component', ()=>{
  it('renders color picker component', ()=>{
    const wrapper = shallow(<ColorPicker/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
