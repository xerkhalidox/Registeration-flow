import React, {Component} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {Button, Text} from '../BasicComponents';
import colors from '../../assets/colors';

class ContinueButton extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <Button
          extendedStyle={{
            paddingBottom: 30,
            paddingRight: 14,
          }}
          onPress={this.props.handlePress}
          disabled={this.props.disabled}>
          <Text
            color={this.props.disabled ? colors.gray : colors.waterBlue}
            extendedStyle={{
              paddingTop: 14,
              paddingBottom: 14,
              backgroundColor: colors.white,
              textAlign: 'center',
              borderRadius: 4,
            }}>
            CONTINUE
          </Text>
        </Button>
      </KeyboardAvoidingView>
    );
  }
}

export default ContinueButton;
