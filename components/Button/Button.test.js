import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from './Button.js';

describe('/components/Button', () => {
  it('should have props for title and onClick', () => {
    const wrapper = shallow(<Button title="Button" />);
    expect(wrapper.props().title).toBe.defined;
    expect(wrapper.props().onClick).toBe.defined;
  });
  it('should be clickable', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<Button title="alert" onClick={ clickMock } />);
    wrapper.simulate('click');
    expect(clickMock).toHaveBeenCalled();
  });
});
