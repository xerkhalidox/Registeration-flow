import React, {Component} from 'react';
import Layout from '../MainLayout/Layout';
import {Button, Row, Column, Text} from '../BasicComponents';
import Input from '../MainComponents/Input';
import colors from '../../assets/colors';
import {observer} from 'mobx-react';

class NewAccountGender extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      maleBtn: {color: colors.white, backgroundColor: colors.waterBlue},
      femaleBtn: {color: colors.white, backgroundColor: colors.waterBlue},
    };
    this.initialColors = {
      color: colors.white,
      backgroundColor: colors.waterBlue,
    };
  }
  handlePress = (_, name) => {
    const {registerationStore} = this.props;
    registerationStore.gender = name;
    if (name === 'male') {
      this.setState({
        maleBtn: {
          color: colors.waterBlue,
          backgroundColor: colors.white,
        },
        femaleBtn: this.initialColors,
        disabled: false,
      });
    } else {
      this.setState({
        femaleBtn: {
          color: colors.waterBlue,
          backgroundColor: colors.white,
        },
        maleBtn: this.initialColors,
        disabled: false,
      });
    }
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  handleContinuePress = () => {
    this.props.navigation.navigate('PhoneNumberScreen');
  };
  render() {
    return (
      <Layout
        label="Choose your gender?"
        disabled={this.state.disabled}
        back={this.goBack}
        handlePress={this.handleContinuePress}>
        <Column>
          <Text color={colors.white} extendedStyle={{paddingTop: 15}}>
            Gender
          </Text>
          <Row extendedStyle={{paddingTop: 4}}>
            <Button
              style={{
                marginRight: 14,
                color: this.state.maleBtn.color,
                backgroundColor: this.state.maleBtn.backgroundColor,
              }}
              extendedStyle={buttonStyle}
              onPress={e => this.handlePress(e, 'male')}>
              <Text color={this.state.maleBtn.color}>Male</Text>
            </Button>
            <Button
              style={{
                backgroundColor: this.state.femaleBtn.backgroundColor,
              }}
              extendedStyle={buttonStyle}
              onPress={e => this.handlePress(e, 'female')}>
              <Text color={this.state.femaleBtn.color}>Female</Text>
            </Button>
            <Input
              autoFocus
              extendedStyle={{width: 0}}
              keyboardType="number-pad"
            />
          </Row>
        </Column>
      </Layout>
    );
  }
}

const buttonStyle = {
  borderWidth: 1,
  borderColor: colors.white,
  borderRadius: 4,
  paddingLeft: 55,
  paddingRight: 60,
  paddingTop: 4,
  paddingBottom: 4,
};
export default observer(NewAccountGender);
