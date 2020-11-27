import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Layout from '../MainLayout/Layout';
import {Column, Text} from '../BasicComponents';
import Input from '../MainComponents/Input';
import State from '../../helper/StateManager';
import colors from '../../assets/colors';

class NewAccountEmail extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
    };
  }
  setContinueButtonState = () => {
    const {registerationStore} = this.props;
    if (registerationStore.email.length > 7) {
      this.setState({
        disabled: false,
      });
    }
  };
  handleChange = (text, field) => {
    const {registerationStore} = this.props;
    registerationStore[field] = text;
    this.setContinueButtonState();
  };
  handlePress = () => {
    this.props.navigation.navigate('BirthDateScreen');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Layout
        label="What's your email?"
        disabled={this.state.disabled}
        handlePress={this.handlePress}
        back={this.goBack}>
        <Column>
          <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
            Email Address
          </Text>
          <Input
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={text => this.handleChange(text, 'email')}
            extendedStyle={TextInputStyle}
          />
        </Column>
      </Layout>
    );
  }
}
const TextInputStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.white,
  color: colors.white,
  paddingBottom: 5,
  paddingTop: 1,
  fontWeight: 'bold',
  textDecoration: 'none',
  width: 310,
  height: 25,
};
export default observer(NewAccountEmail);
