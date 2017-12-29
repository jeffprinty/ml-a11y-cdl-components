import React, { Component } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

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

class TreeNode extends Component {
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
    let childNodes;

    if (node.childNodes) {
      childNodes = node.childNodes.map((childNode, index) => <li key={ index }><TreeNode node={ childNode } /></li>);

      classObj = {
        togglable: true,
        'togglable-down': this.state.visible,
        'togglable-up': !this.state.visible
      };
    }

    let style;
    if (!this.state.visible) {
      style = { display: 'none' };
    }

    return (
      <TreeNodeWrap>
        <button role="treeitem" onClick={ this.toggle } className="togglable">
          {node.title}
        </button>
        <ul style={ style }>
          {childNodes}
        </ul>
      </TreeNodeWrap>
    );
  }
}

TreeNode.propTypes = {
  node: object.isRequired
};

export default TreeNode;
