import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import Layout from '../MainLayout/Layout';
import {Column, Row, Text, TextInput} from '../BasicComponents';
import Input from '../MainComponents/Input';
import colors from '../../assets/colors';
import State from '../../helper/StateManager';
import {action} from 'mobx';

@inject('rootStore')
@observer
class NewAccountName extends Component {
  constructor() {
    super();
    z;
    this.state = {
      disabled: true,
    };
  }
  handlePress = () => {
    State.firstName = this.state.firstName;
    State.lastName = this.state.lastName;
    this.props.navigation.navigate('EmailScreen');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Layout
        label="What's your name?"
        disabled={this.state.disabled}
        handlePress={this.handlePress}
        back={this.goBack}>
        <Row extendedStyle={{paddingTop: 14}}>
          <Column>
            <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
              {this.props.rootStore.RegisterationStore.firstName}
            </Text>
            <Input
              autoFocus
              onChangeText={() => 'firstName'}
              extendedStyle={TextInputStyle}
              //value={this.props.rootStore.RegisterationStore['firstName']}
            />
          </Column>
          <Column extendedStyle={{paddingLeft: 20}}>
            <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
              Last Name
            </Text>
            <Input
              onChangeText={() => 'lastName'}
              extendedStyle={TextInputStyle}
            />
          </Column>
        </Row>
      </Layout>
    );
  }
}
const TextInputStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.white,
  width: 150,
  color: colors.white,
  paddingBottom: 5,
  paddingTop: 5,
  paddingLeft: 1,
  height: 25,
};
export default NewAccountName;
