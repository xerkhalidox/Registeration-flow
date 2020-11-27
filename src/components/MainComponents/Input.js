import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput} from '../BasicComponents';

class Input extends Component {
  handleChange = text => {
    const {onChangeText} = this.props;
    onChangeText(text);
  };
  render() {
    return <TextInput {...this.props} onChangeText={this.handleChange} />;
  }
}

Input.propTypes = {
  onChangeText: PropTypes.func,
};

export default observer(Input);
