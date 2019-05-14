import React from 'react';
import { shallow } from 'enzyme';
import ColorDiv from './ColorDiv';

describe('colordiv component', ()=>{
  it('renders Random', ()=>{
    const wrapper = shallow(<ColorDiv/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;
