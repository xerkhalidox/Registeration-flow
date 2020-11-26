import React, {Component} from 'react';
import {Column, Row, Text, Image, Button} from '../BasicComponents';
import colors from '../../assets/colors';
import Logo from '../../assets/imgs/sideMenuCopy16_2020-11-23/sideMenuCopy16.png';
import facebookLogo from '../../assets/imgs/facebookBtn_2020-11-23/facebookBtn.png';

class NewAccountLandpage extends Component {
  handlePress = () => {
    this.props.navigation.navigate('NameScreen');
  };
  render() {
    return (
      <Column
        extendedStyle={{
          flex: 1,
          backgroundColor: colors.waterBlue,
          paddingLeft: 14,
          paddingTop: 167,
        }}>
        <Image source={Logo} />
        <Text
          color={colors.white}
          fontSize={22}
          extendedStyle={{paddingTop: 24}}>
          Welcome to Yodawy
        </Text>
        <Button
          extendedStyle={{
            backgroundColor: colors.white,
            borderRadius: 4,
            marginRight: 14,
            marginTop: 24,
            paddingTop: 14,
            paddingBottom: 14,
            alignItems: 'center',
          }}>
          <Row>
            <Image source={facebookLogo} />
            <Text color={colors.waterBlue} extendedStyle={{paddingLeft: 14}}>
              CONNECT WITH FACEBOOK
            </Text>
          </Row>
        </Button>
        <Button
          extendedStyle={{
            alignItems: 'center',
            backgroundColor: colors.waterBlue,
            borderWidth: 1,
            borderColor: colors.white,
            borderRadius: 4,
            marginRight: 14,
            marginTop: 24,
            paddingTop: 14,
            paddingBottom: 14,
          }}
          onPress={this.handlePress}>
          <Text color={colors.white}>ENTER YOUR PERSONAL DETAILS</Text>
        </Button>
        <Row
          extendedStyle={{
            flexWrap: 'wrap',
            paddingTop: 167,
          }}>
          <Text color={colors.white}>
            By creating an accoutn, you agree to Yodawy{' '}
          </Text>
          <Text
            color={colors.white}
            extendedStyle={{textDecoration: 'underline'}}>
            Terms of Services
          </Text>
          <Text color={colors.white}>And</Text>
          <Text
            color={colors.white}
            extendedStyle={{textDecoration: 'underline'}}>
            {' '}
            Privacy Policy
          </Text>
        </Row>
      </Column>
    );
  }
}
export default NewAccountLandpage;
