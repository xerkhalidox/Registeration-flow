import React, {Component} from 'react';
import Layout from '../MainLayout/Layout';
import {Column, Text} from '../BasicComponents';
import Input from '../MainComponents/Input';
import State from '../../helper/StateManager';
import colors from '../../assets/colors';
import {inject} from 'mobx-react';
import {observable} from 'mobx';

@inject('rootStore')
@observable
class NewAccountEmail extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      disabled: true,
    };
  }
  handleChange = text => {
    this.setState({email: text}, () => {
      if (this.state.email.length > 8) {
        this.setState({disabled: false});
      } else {
        this.setState({disabled: true});
      }
    });
  };
  handlePress = () => {
    State.email = this.state.email;
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
            onChangeText={this.handleChange}
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
export default NewAccountEmail;
