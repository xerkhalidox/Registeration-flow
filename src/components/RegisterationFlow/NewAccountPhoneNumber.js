import React, {Component} from 'react';
import {observer} from 'mobx-react';

import Layout from '../MainLayout/Layout';
import {Column, Row, Text, Image} from '../BasicComponents';
import Input from '../MainComponents/Input';
import colors from '../../assets/colors';
import Flag from '../../assets/imgs/input-phone-number_2020-11-23/input-phone-number.png';
import Arrow from '../../assets/imgs/arrow-right_2020-11-23/arrow-right.png';

class NewAccountName extends Component {
  constructor(props) {
    super();
    this.state = {
      disabled: true,
    };
  }
  handleChange = text => {
    const {registerationStore} = this.props;
    registerationStore.phoneNumber = text;
    if (
      registerationStore.phoneNumber.length > 9 &&
      registerationStore.phoneNumber.length < 12
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
  goBack = () => {
    this.props.navigation.goBack();
  };
  handlePress = () => {
    // to be implemented
  };
  render() {
    return (
      <Layout
        label="Enter your phone number to continue using Yodawy"
        disabled={this.state.disabled}
        handlePress={this.handlePress}
        back={this.goBack}>
        <Column>
          <Text color={colors.white} extendedStyle={{paddingTop: 14}}>
            Phone Number
          </Text>
          <Row
            extendedStyle={{
              borderBottomWidth: 1,
              borderBottomColor: colors.white,
              paddingTop: 4,
              width: 65,
            }}>
            <Image source={Flag} />
            <Image source={Arrow} extendedStyle={{marginLeft: 5}} />
            <Text color={colors.white} extendedStyle={{paddingLeft: 5}}>
              +20
            </Text>
          </Row>
        </Column>
        <Column extendedStyle={{paddingTop: 32}}>
          <Input
            autoFocus
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
  width: 240,
  color: colors.white,
  paddingBottom: 5,
  paddingTop: 5,
  paddingLeft: 1,
  height: 25,
};
export default NewAccountName;
