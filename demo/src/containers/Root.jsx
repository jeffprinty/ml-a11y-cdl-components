/* eslint global-require: 0 */
/* eslint no-return-assign: 0 */
import React, { Component, ReactDOM } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import Playground from './Playground';

import { Button, Column, Alert, Toggle } from '../../../components';
import { Layout, Sidebar, Header, Page } from '../../../components/Layout/';
import {
  ButtonUsage, ButtonExample,
  ButtonWithIconExample, AlertExample, AlertUsage,
  ToggleExample, ToggleUsage, LayoutExample
} from '../../../docs';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const ToggleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
// const Title = styled.h1`

// `;
// const Status = styled.div`
//   position: fixed;
//   bottom: 0;
//   left: 0;
// `;

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditors: true,
      status: 'loaded',
      sidebarRight: false
    };
  }
  handleClick = (e) => {
    const element = e.target.id;
    this.setState({ status: `${element} clicked` });
  }
  render() {
    const { showEditors, sidebarRight } = this.state;
    const columns = [
      [ 3, 3, 3, 3 ],
      [ 3, 3, 4, 2 ],
      [ 4, 4, 4 ],
      [ 4, 4, 2, 2 ]
    ];
    return (
      <Layout sidebar={ sidebarRight ? 'right' : 'left' }>
        <Header title="ml-a11y-cdl-components" />
        <Sidebar>
          <h3>Sidebar</h3>
          <ToggleRow>
            <label htmlFor="editorToggle">Toggle Editors</label>
            <Toggle
              label="Toggle Editors"
              id="editorToggle"
              checked={ showEditors }
              onChange={ () => this.setState({ showEditors: !this.state.showEditors }) }
            />
          </ToggleRow>
          <ToggleRow>
            <label htmlFor="sidebarToggle">Sidebar { sidebarRight ? 'right' : 'left' }</label>
            <Toggle
              label="Toggle Sidebar"
              id="sidebarToggle"
              checked={ sidebarRight }
              onChange={ () => this.setState({ sidebarRight: !sidebarRight }) }
            />
          </ToggleRow>
          <ul>
            {
              [ 'toggle', 'layout', 'alert', 'button' ].map((name, i) => <li key={ i }><a href={ `#${name}` }>{ name }</a></li>)
            }
          </ul>
        </Sidebar>
        <div>
          <Page>
            <h2><a name="toggle">Toggle</a></h2>
            <ReactMarkdown source={ ToggleUsage } />
            <Playground
              showEditor={ showEditors }
              className="playground"
              codeText={ ToggleExample }
              scope={{ React, ReactDOM, Toggle }}
            />
          </Page>
          <Page>
            <h2><a name="layout">Layout</a></h2>
            {
              columns.map((arr, i) => (
                <Container key={ i }>
                  {
                    arr.map((col, c) => (
                      <Column key={ c } sm={ 12 } md={ col } lg={ col }>
                        <div style={{ backgroundColor: '#f8f8dd' }}>{col}</div>
                      </Column>
                    ))
                  }
                </Container>
              ))
            }
          </Page>
          <Page>
            <h2><a name="alert">Alert</a></h2>
            <ReactMarkdown source={ AlertUsage } />
            <Playground
              showEditor={ showEditors }
              className="playground"
              codeText={ AlertExample }
              scope={{ React, ReactDOM, Alert, Button }}
            />
          </Page>
          <Page>
            <h2><a name="button">Button</a></h2>
            <ReactMarkdown source={ ButtonUsage } />
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
          </Page>
        </div>
      </Layout>
    );
  }
}
