import {observer} from 'mobx-react';
import React from 'react';
import {Text, TextInput} from 'react-native';
import store from '../stores/RegisterationStore';
const Test = props => {
  console.log(props);
  function handleChange(text) {
    props.accountStore.firstName = text;
  }
  return (
    <>
      {/* <Text>{props.accountStore.firstName}dd</Text> */}
      <TextInput onChangeText={handleChange} />
    </>
  );
};

export default observer(Test);
