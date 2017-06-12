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

  it('with href should match the snapshot when enabled', () => {
    const wrapper = mount(
      <Button
        ariaLabelledBy="testButton"
        href="http://fastgood.cheap/"
        disabled={ false }
        title="Button" />
      );
    expect(wrapper).toMatchSnapshot();
  });

  it('with href should match the snapshot when disabled', () => {
    const wrapper = mount(
      <Button
        ariaLabelledBy="testButton"
        href="http://fastgood.cheap/"
        disabled={ true }
        title="Button" />
      );
    expect(wrapper).toMatchSnapshot();
  });

  it('with onClick prop should render a button', () => {
    const clickMock = jest.fn();
    const wrapper = mount(
      <Button
        ariaLabelledBy="testButton"
        onClick={ clickMock }
        disabled={ true }
        title="Button" />
      );
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('should update style on hover', () => {
    const wrapper = mount(
      <Button
        ariaLabelledBy="testButton"
        title="Button" />
      );
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('mouseenter');
    expect(wrapper).toMatchSnapshot();


  });
  it('should trigger onClick function when clicked', () => {
    const clickMock = jest.fn();
    const wrapper = mount(<Button title="alert" onClick={ clickMock } />);
    wrapper.simulate('click');
    expect(clickMock).toHaveBeenCalled();
  });
});
