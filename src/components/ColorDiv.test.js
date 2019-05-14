import React from 'react';
import { shallow } from 'enzyme';
import ColorDiv from './ColorDiv';

describe('colorDiv component', ()=>{
  it('renders ColorDiv component', ()=>{
    const wrapper = shallow(<ColorDiv color='green'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
