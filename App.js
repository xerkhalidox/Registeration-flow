import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NewAccountLandpage from './src/components/RegisterationFlow/NewAccountLandpage';
import NewAccountName from './src/components/RegisterationFlow/NewAccountName';
import NewAccountEmail from './src/components/RegisterationFlow/NewAccountEmail';
import NewAccountBirthDate from './src/components/RegisterationFlow/NewAccountBirthDate';
import NewAccountGender from './src/components/RegisterationFlow/NewAccountGender';
import NewAccountPhoneNumber from './src/components/RegisterationFlow/NewAccountPhoneNumber';
import UserQuery from './src/components/UserQuery';
import {Provider} from 'mobx-react';
import rootStore from './src/stores/RootStore';

const RootStack = createStackNavigator(
  {
    LandpageScreen: NewAccountLandpage,
    NameScreen: NewAccountName,
    EmailScreen: NewAccountEmail,
    BirthDateScreen: NewAccountBirthDate,
    GenderScreen: NewAccountGender,
    PhoneNumberScreen: NewAccountPhoneNumber,
  },
  {
    initialRouteName: 'LandpageScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const AppContainer = createAppContainer(RootStack);

const App = props => {
  return (
    <Provider rootStore={rootStore}>
      <AppContainer />
    </Provider>
  );
};

export default App;
