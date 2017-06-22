import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import randomize from 'randomatic';
import styled from 'styled-components';
import AlertDisplay from './Alert';

const AlertBox = styled.div`
  display: block;
`;

class AlertContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    };
  }
  show = (content = '', options = {}) => {
    const alert = {
      shortId: randomize('Aa0', 5),
      content,
      options
    };
    this.setState(prevState => ({
      alerts: prevState.alerts.concat(alert)
    }));
  }
  remove = (id) => {
    this.setState(prevState => ({
      alerts: prevState.alerts.filter(al => al.shortId !== id)
    }));
  }
  clear = () => this.setState({ alerts: [] });
  render() {
    return (
      <AlertBox>
        {
          this.state.alerts.map(alert =>
            <AlertDisplay key={ alert.shortId } dismiss={ this.remove } { ...alert } />)
        }
      </AlertBox>
    );
  }
}
AlertContainer.defaultProps = {
  options: {
    position: 'top'
  }
};
AlertContainer.propTypes = {
  options: shape({
    position: string
  })
};


export default AlertContainer;
