import React from 'react';
import {observer, inject} from 'mobx-react';
import AccountView from './MobxDemo';
const MobxContainer = inject('rootStore')(
  observer(props => (
    <AccountView accountStore={props.rootStore.RegisterationStore} {...props} />
  )),
);
const AccountContainer = MobxContainer;
export default AccountContainer;
