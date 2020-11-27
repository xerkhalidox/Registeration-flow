import React from 'react';
import {observer, inject} from 'mobx-react';
import NewAccountGender from '../components/RegisterationFlow/NewAccountGender';

const MobxContainer = inject('rootStore')(
  observer(props => (
    <NewAccountGender
      registerationStore={props.rootStore.registerationStore}
      {...props}
    />
  )),
);
const NewAccountGenderContainer = MobxContainer;
export default NewAccountGenderContainer;
