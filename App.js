import React, {useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'mobx-react';
import screen from 'react-native-splash-screen';

import NewAccountLandpage from './src/components/RegisterationFlow/NewAccountLandpage';
import {
  NewAccountNameContainer,
  NewAccountEmailContainer,
  NewAccountBirthDateContainer,
  NewAccountGenderContainer,
  NewAccountPhoneNumberContainer,
} from './src/containers';
import UserQuery from './src/components/UserQuery';
import rootStore from './src/stores/RootStore';

const RootStack = createStackNavigator(
  {
    LandpageScreen: NewAccountLandpage,
    NameScreen: NewAccountNameContainer,
    EmailScreen: NewAccountEmailContainer,
    BirthDateScreen: NewAccountBirthDateContainer,
    GenderScreen: NewAccountGenderContainer,
    PhoneNumberScreen: NewAccountPhoneNumberContainer,
  },
  {
    initialRouteName: 'NameScreen',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);
const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  componentDidMount() {
    screen.hide();
  }
  render() {
    return (
      <Provider rootStore={rootStore}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
