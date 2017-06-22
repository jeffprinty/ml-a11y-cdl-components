/* eslint global-require: 0 */
/* eslint no-return-assign: 0 */
import React, { Component, ReactDOM } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Playground from './Playground';

import { Button, Column, Alert, Toggle } from '../../../components';
import {
  ButtonUsage, ButtonExample,
  ButtonWithIconExample, AlertExample,
  ToggleExample
} from '../../../docs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.h1`
  
`;
const Status = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditors: true,
      status: 'loaded'
    };
  }
  handleClick = (e) => {
    const element = e.target.id;
    this.setState({ status: `${element} clicked` });
  }
  showAlert = (e) => {
    const { title, value } = e.currentTarget;
    console.log('title, value', title, value);
    this.alert.show(title, { type: value });
  }
  render() {
    const { showEditors, status } = this.state;
    return (
      <Container>
        <Column sm={ 12 } md={ 3 } lg={ 3 }>
          <Title>
            ml-a11y-cdl-components
          </Title>
          <Status>
            { status }
          </Status>
        </Column>
        <Column sm={ 12 } md={ 9 } lg={ 9 }>
          <label htmlFor="editorToggle">Toggle Editors</label>
          <Toggle
            label="Toggle"
            id="editorToggle"
            onChange={ () => this.setState({ showEditors: !this.state.showEditors }) }
          />
          <hr />
          <h2>Toggle</h2>
          <Playground
            showEditor={ showEditors }
            className="playground"
            codeText={ ToggleExample }
            scope={{ React, ReactDOM, Toggle }}
          />
          <h2>Alert</h2>
          <Button title="New Alert" value="alert" onClick={ e => this.showAlert(e) } />
          <Button title="New Warning" value="warning" onClick={ e => this.showAlert(e) } />
          <Button title="New error" value="error" onClick={ e => this.showAlert(e) } />
          <Button title="New success" value="success" onClick={ e => this.showAlert(e) } />
          <Alert ref={ a => this.alert = a } />

          <Playground
            showEditor={ showEditors }
            className="playground"
            codeText={ AlertExample }
            scope={{ React, ReactDOM, Alert }}
          />
          <ReactMarkdown source={ ButtonUsage } />
          <h2>Button</h2>
          <Button title="Button Example" onClick={ e => this.handleClick(e) } />
          <Playground
            showEditor={ showEditors }
            className="playground"
            codeText={ ButtonExample }
            scope={{ React, ReactDOM, Button }}
          />
          <h2>Button with Icon</h2>
          <Playground
            showEditor={ showEditors }
            className="playground"
            codeText={ ButtonWithIconExample }
            scope={{ React, ReactDOM, Button }}
          />
        </Column>
      </Container>
    );
  }
}
