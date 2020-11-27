import React from 'react';
import {observer, inject} from 'mobx-react';
import NewAccountName from '../components/RegisterationFlow/NewAccountName';

const MobxContainer = inject('rootStore')(
  observer((props) => (
    <NewAccountName
      registerationStore={props.rootStore.registerationStore}
      {...props}
    />
  )),
);
const NewAccountNameContainer = MobxContainer;
export default NewAccountNameContainer;
