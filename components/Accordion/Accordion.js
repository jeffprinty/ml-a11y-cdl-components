import React, { PropTypes, Component, Children } from 'react';

const { node } = PropTypes;

class Accordion extends Component {
  static propTypes = {
    children: node,
  }
  state = {
    activeIndex: [],
  }

  changeActiveIndexHander = (index) => {
    // if index in the activeIndex array THEN remove it
    if (this.state.activeIndex.includes(index)) {
      this.setState({
        activeIndex: this.state.activeIndex.filter(item => item !== index),
      });
    } else {
      const newArray = [...this.state.activeIndex];
      newArray.push(index);
      this.setState({
        activeIndex: newArray,
      });
    }
  // if index is in the activeIndex array THEN add it
  }

  render () {
    // console.log({ STATE: this.state.activeIndex });
    const { children } = this.props;
    const { activeIndex } = this.state
    const kids = Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        isActive: activeIndex.includes(index),
        onActivate: this.changeActiveIndexHander,
        index,
      });
    });
    return (
      <div>{ kids }</div>
    );
  }
}

export default Accordion;
