import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import PlusMinus from './PlusMinus';

const TreeNodeWrap = styled.div`
  .togglable {
    color: #D78770;
    cursor: pointer;
  }

  .togglable-down::after,
  .togglable-up::after {
    font-size: 8px;
    margin-left: 0.5em;
  }

  .togglable-down::after {
    content: "▼";
    display: inline-block;
  }

  .togglable-up::after {
    content: "▶";
    display: inline-block;
  }
`;
const NodeTitle = styled.li`
  margin-left: 30px;
`;

class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }

  toggle = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { node } = this.props;
    const { visible } = this.state;
    let childNodes;

    if (node.childNodes) {
      console.log('node.childNodes', node.childNodes);
      childNodes = node.childNodes.map((childNode, index) =>
        <li key={ index }><Node node={ childNode } /></li>);
    }

    let style;
    if (!this.state.visible) {
      style = { display: 'none' };
    }

    return (
      <TreeNodeWrap>
        <NodeTitle role="treeitem" onClick={ this.toggle }>
          <PlusMinus expanded={ visible } />
          {node.title}
        </NodeTitle>
        <ul style={ style }>
          {childNodes}
        </ul>
      </TreeNodeWrap>
    );
  }
}

Node.propTypes = {
  node: object.isRequired
};

export default Node;
