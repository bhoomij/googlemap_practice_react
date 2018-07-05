import React, {Component} from 'react';
import PropTypes from 'proptypes';

import {PlaceStyle} from './PlaceStyle';

export default class Place extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {};

  render() {
    return (
       <div style={PlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}