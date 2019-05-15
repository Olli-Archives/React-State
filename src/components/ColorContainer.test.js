import React from 'react';
import { shallow } from 'enzyme';
import ColorContainer from './ColorContainer';

describe('color conainer component', ()=>{
  it('renders color container', ()=>{
    const wrapper = shallow(<ColorContainer/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
