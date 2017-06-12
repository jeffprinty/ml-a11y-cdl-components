/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-expressions */
/* eslint-disable global-require */
/* eslint-disable react/no-string-refs */
/* eslint-disable max-len */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import className from 'classnames';
import debounce from 'lodash.debounce';

function normalizeLineEndings(str) {
  if (!str) return str;
  return str.replace(/\r\n|\r/g, '\n');
}

class CodeMirror extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  componentWillMount = () => {
    this.componentWillReceiveProps = debounce(this.componentWillReceiveProps, 0);
  }
  componentDidMount = () => {
    const textareaNode = findDOMNode(this.refs.textarea);
    const codeMirrorInstance = this.getCodeMirrorInstance();
    this.codeMirror = codeMirrorInstance.fromTextArea(textareaNode, this.props.options);
    this.codeMirror.on('change', this.codemirrorValueChanged);
    this.codeMirror.on('focus', this.focusChanged.bind(this, true));
    this.codeMirror.on('blur', this.focusChanged.bind(this, false));
    this.codeMirror.on('scroll', this.scrollChanged);
    this.codeMirror.setValue(this.props.defaultValue || this.props.value || '');
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.codeMirror && nextProps.value !== undefined && normalizeLineEndings(this.codeMirror.getValue()) !== normalizeLineEndings(nextProps.value)) {
      if (this.props.preserveScrollPosition) {
        const prevScrollPosition = this.codeMirror.getScrollInfo();
        this.codeMirror.setValue(nextProps.value);
        this.codeMirror.scrollTo(prevScrollPosition.left, prevScrollPosition.top);
      } else {
        this.codeMirror.setValue(nextProps.value);
      }
    }
    if (typeof nextProps.options === 'object') {
      Object.keys(nextProps.options).forEach((optionName) => {
        if (nextProps.options.hasOwnProperty(optionName)) {
          this.codeMirror.setOption(optionName, nextProps.options[optionName]);
        }
      });
    }
  }
  componentWillUnmount = () => {
    // is there a lighter-weight way to remove the cm instance?
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
    }
  }
  getCodeMirrorInstance = () => this.props.codeMirrorInstance || require('codemirror')

  getCodeMirror = () => this.codeMirror
  focus = () => {
    if (this.codeMirror) {
      this.codeMirror.focus();
    }
  }
  focusChanged = (focused) => {
    this.setState({
      isFocused: focused
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }
  scrollChanged = (cm) => {
    this.props.onScroll && this.props.onScroll(cm.getScrollInfo());
  }
  codemirrorValueChanged = (doc, change) => {
    if (this.props.onChange && change.origin !== 'setValue') {
      this.props.onChange(doc.getValue(), change);
    }
  }
  render() {
    const editorClassName = className('ReactCodeMirror', this.state.isFocused ? 'ReactCodeMirror--focused' : null, this.props.className);
    return (
      <div className={ editorClassName }>
        <textarea
          ref="textarea"
          name={ this.props.path }
          defaultValue={ this.props.value }
          autoComplete="off"
        />
      </div>
    );
  }
}

CodeMirror.defaultProps = {
  preserveScrollPosition: false
};
CodeMirror.propTypes = {
  className: PropTypes.any,
  codeMirrorInstance: PropTypes.func,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onFocusChange: PropTypes.func,
  onScroll: PropTypes.func,
  options: PropTypes.object,
  path: PropTypes.string,
  value: PropTypes.string,
  preserveScrollPosition: PropTypes.bool
};

module.exports = CodeMirror;
