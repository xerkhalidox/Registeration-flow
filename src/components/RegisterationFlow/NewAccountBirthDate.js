import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Layout from '../MainLayout/Layout';
import {Row, Column, Text} from '../BasicComponents';
import Input from '../MainComponents/Input';
import colors from '../../assets/colors';

class NewAccountBirthDate extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
    };
  }

  setContinueButtonState = () => {
    const {day, month, year} = this.props.registerationStore;
    let currentYear = new Date().getFullYear();
    if (
      day > 0 &&
      day < 32 &&
      month > 0 &&
      month < 13 &&
      year < currentYear &&
      year > 1900
    ) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };
  handleChange = (text, field) => {
    const {registerationStore} = this.props;
    registerationStore[field] = text;
    this.setContinueButtonState();
  };
  handlePress = () => {
    this.props.navigation.navigate('GenderScreen');
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <Layout
        label="Enter your birthdate and gender"
        disabled={this.state.disabled}
        handlePress={this.handlePress}
        back={this.goBack}>
        <Column>
          <Text color={colors.white} extendedStyle={{paddingTop: 15}}>
            Birthdate
          </Text>
          <Row>
            <Input
              autoFocus
              keyboardType="number-pad"
              placeholder="Day"
              placeholderTextColor={colors.white}
              value={this.state.day}
              onChangeText={text => this.handleChange(text, 'day')}
              style={{marginRight: 5}}
              extendedStyle={TextInputStyle}
              onSubmitEditing={() => this.refs.month.focus()}
            />
            <Input
              ref="month"
              keyboardType="number-pad"
              placeholder="Month"
              placeholderTextColor={colors.white}
              value={this.state.month}
              onChangeText={text => this.handleChange(text, 'month')}
              style={{marginRight: 5}}
              extendedStyle={TextInputStyle}
              onSubmitEditing={() => this.refs.year.focus()}
            />
            <Input
              ref="year"
              keyboardType="number-pad"
              placeholder="Year"
              value={this.state.year}
              placeholderTextColor={colors.white}
              onChangeText={text => this.handleChange(text, 'year')}
              extendedStyle={TextInputStyle}
            />
          </Row>
        </Column>
      </Layout>
    );
  }
}
const TextInputStyle = {
  borderBottomWidth: 1,
  borderBottomColor: colors.white,
  color: colors.white,
  marginLeft: 6,
  width: 100,
  paddingBottom: 6,
  textAlign: 'center',
  height: 30,
};
export default observer(NewAccountBirthDate);
