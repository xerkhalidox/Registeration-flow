import React, {Component} from 'react';
import Layout from '../MainLayout/Layout';
import {Row, Column, Text, TextInput} from '../BasicComponents';
import colors from '../../assets/colors';
import State from '../../helper/StateManager';

class NewAccountBirthDate extends Component {
  constructor() {
    super();
    this.state = {
      day: '',
      month: '',
      year: '',
      disabled: true,
    };
  }
  handleChange = (text, name) => {
    this.setState({[name]: text}, () => {
      let {day, month, year} = this.state;
      const currentYear = new Date().getFullYear();
      if (
        day > 0 &&
        day < 32 &&
        month > 0 &&
        month < 13 &&
        year < currentYear &&
        year > 1900
      ) {
        this.setState({disabled: false});
      } else {
        this.setState({disabled: true});
      }
    });
  };
  handlePress = () => {
    State.day = this.state.day;
    State.month = this.state.month;
    State.year = this.state.year;
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
            <TextInput
              autoFocus
              keyboardType="number-pad"
              placeholder="Day"
              placeholderTextColor={colors.white}
              value={this.state.day}
              onChangeText={e => this.handleChange(e, 'day')}
              style={{marginRight: 5}}
              extendedStyle={TextInputStyle}
              onSubmitEditing={() => this.refs.month.focus()}
            />
            <TextInput
              ref="month"
              keyboardType="number-pad"
              placeholder="Month"
              placeholderTextColor={colors.white}
              value={this.state.month}
              onChangeText={e => this.handleChange(e, 'month')}
              style={{marginRight: 5}}
              extendedStyle={TextInputStyle}
              onSubmitEditing={() => this.refs.year.focus()}
            />
            <TextInput
              ref="year"
              keyboardType="number-pad"
              placeholder="Year"
              value={this.state.year}
              placeholderTextColor={colors.white}
              onChangeText={e => this.handleChange(e, 'year')}
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
export default NewAccountBirthDate;
