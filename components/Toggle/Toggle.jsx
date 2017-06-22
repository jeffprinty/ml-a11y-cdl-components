import React, { Component } from 'react';
import { func, string, bool } from 'prop-types';
import styled from 'styled-components';

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  input {
    opacity: 0;
  }
  input:focus + .slider:before {
    box-shadow: 0 0 3pt 2pt -webkit-focus-ring-color;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 14px;
    background-color: #989898;
    -webkit-transition: .4s;
    transition: .4s;
    
  }
  .slider:before {
      border-radius: 50%;
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      border-radius: 14px;
    }
  input:checked + .slider {
    background-color: #00758e;
  }

  input:checked + .slider:before {
    transform: translateX(22px);
  }

  input:checked:disabled + .slider {
    background-color: #A2D6DD;
  }

  input:disabled + .slider {
    background-color: #dddddd;
  }
`;

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    };
  }
  clickCheckbox = () => {
    const { checked } = this.state;
    this.props.onChange(!checked);
    this.setState({
      checked: !checked
    });
  }
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.clickCheckbox();
    }
  }

  render() {
    const { disabled, label, id } = this.props;
    return (
      <Switch>
        <input
          type="checkbox"
          onChange={ this.clickCheckbox }
          onKeyDown={ this.handleKeyDown }
          aria-label={ label }
          id={ id }
          disabled={ disabled }
          checked={ this.state.checked }
        />
        <div className="slider" />
      </Switch>
    );
  }

}

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  id: ''
};

Toggle.propTypes = {
  onChange: func.isRequired,
  label: string.isRequired,
  id: string,
  checked: bool,
  disabled: bool
};

export default Toggle;
