import React from 'react';
import {observer, inject} from 'mobx-react';
import NewAccountBirthDate from '../components/RegisterationFlow/NewAccountBirthDate';

const MobxContainer = inject('rootStore')(
  observer(props => (
    <NewAccountBirthDate
      registerationStore={props.rootStore.registerationStore}
      {...props}
    />
  )),
);
const NewAccountBirthDateContainer = MobxContainer;
export default NewAccountBirthDateContainer;
