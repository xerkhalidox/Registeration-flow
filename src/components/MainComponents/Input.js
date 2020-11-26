import {action} from 'mobx';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {TextInput} from '../BasicComponents';
import Store from '../../stores/RegisterationStore';

@inject('rootStore')
@observer
class Input extends Component {
  handleChange = text => {
    this.prpos.rootStore.RegisterationStore.firstName = text;
  };
  render() {
    return <TextInput {...this.props} onChangeText={this.handleChange} />;
  }
}

export default Input;
