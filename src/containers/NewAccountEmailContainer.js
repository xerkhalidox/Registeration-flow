import React from 'react';
import {observer, inject} from 'mobx-react';
import NewAccountEmail from '../components/RegisterationFlow/NewAccountEmail';

const MobxContainer = inject('rootStore')(
  observer(props => (
    <NewAccountEmail
      registerationStore={props.rootStore.registerationStore}
      {...props}
    />
  )),
);
const NewAccountEmailContainer = MobxContainer;
export default NewAccountEmailContainer;
