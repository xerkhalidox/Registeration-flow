import React from 'react';
import {observer, inject} from 'mobx-react';
import NewAccountPhoneNumber from '../components/RegisterationFlow/NewAccountPhoneNumber';

const MobxContainer = inject('rootStore')(
  observer(props => (
    <NewAccountPhoneNumber
      registerationStore={props.rootStore.registerationStore}
      {...props}
    />
  )),
);
const NewAccountPhoneNumberContainer = MobxContainer;
export default NewAccountPhoneNumberContainer;
