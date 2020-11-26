import React, {Component} from 'react';
import {View} from 'react-native';
import {Column, Image, Text, Row, Button} from '../BasicComponents';
import ContinueButton from '../MainComponents/ContinueButton';
import Logo from '../../assets/imgs/group5Copy6_2020-11-23/group5Copy6.png';
import BackButton from '../../assets/imgs/back_2020-11-24/back.png';
import colors from '../../assets/colors';
class Layout extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: colors.waterBlue,
          paddingLeft: 14,
          paddingTop: 34,
          flex: 1,
        }}>
        <Button onPress={this.props.back}>
          <Image source={BackButton} />
        </Button>
        <Column extendedStyle={{flex: 1, paddingTop: 30}}>
          <Image source={Logo} extendedStyle={{alignSelf: 'center'}} />
          <Text
            color={colors.white}
            fontSize={16}
            extendedStyle={{
              paddingTop: 24,
            }}>
            {this.props.label}
          </Text>
          <Row>{this.props.children}</Row>
        </Column>
        <ContinueButton
          disabled={this.props.disabled}
          handlePress={this.props.handlePress}
        />
      </View>
    );
  }
}

export default Layout;
