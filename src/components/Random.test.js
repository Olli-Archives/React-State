import React from 'react';
import { shallow } from 'enzyme';
import Random from './Random';

describe('random component', ()=>{
  it('renders Random', ()=>{
    const wrapper = shallow(<Random/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
