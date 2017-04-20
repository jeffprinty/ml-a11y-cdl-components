/* eslint-disable */
import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Button from './Button';

describe('/components/Button', () => {
  it('should have props for title and onClick', () => {
    const wrapper = shallow(<Button title="Button" />);
    expect(wrapper.props().title).toBe.defined;
    expect(wrapper.props().onClick).toBe.defined;
  });
  it('should render an a tag if button is not disabled', () => {
    const wrapper = mount(<Button title="Button" />);
    console.log("wrapper", wrapper);
  });
  it('should trigger onClick function when clicked', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<Button title="alert" onClick={ clickMock } />);
    wrapper.simulate('click');
    expect(clickMock).toHaveBeenCalled();
  });
});
