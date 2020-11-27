import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Layout from '../MainLayout/Layout';
import {Column, Row, Text} from '../BasicComponents';
import Input from '../MainComponents/Input';
import colors from '../../assets/colors';
import State from '../../helper/StateManager';

class NewAccountName extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
    };
  }

  handlePress = () => {
    this.props.navigation.navigate('EmailScreen');
  };

  goBack = () => {
    this.props.navigation.goBack();
  };
  setContinueButtonState = () => {
    const {registerationStore} = this.props;
    if (
      registerationStore.firstName.length > 3 &&
      registerationStore.lastName.length > 3
    ) {
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

  render() {
    const {registerationStore} = this.props;
    return (
      <Layout
        label="What's your name?"
        disabled={this.state.disabled}
        handlePress={this.handlePress}
        back={this.goBack}>
        <Row extendedStyle={{paddingTop: 14}}>
          <Column>
            <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
              First Name
            </Text>
            <Input
              autoFocus
              onChangeText={text => this.handleChange(text, 'firstName')}
              extendedStyle={TextInputStyle}
              value={registerationStore['firstName']}
            />
          </Column>
          <Column extendedStyle={{paddingLeft: 20}}>
            <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
              Last Name
            </Text>
            <Input
              onChangeText={text => this.handleChange(text, 'lastName')}
              extendedStyle={TextInputStyle}
              value={registerationStore['lastName']}
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

NewAccountName.propTypes = {
  registerationStore: PropTypes.object,
};

export default observer(NewAccountName);
