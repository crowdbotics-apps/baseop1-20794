import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile114422Navigator from '../features/UserProfile114422/navigator';
import Tutorial114421Navigator from '../features/Tutorial114421/navigator';
import NotificationList114393Navigator from '../features/NotificationList114393/navigator';
import Settings114392Navigator from '../features/Settings114392/navigator';
import Settings114384Navigator from '../features/Settings114384/navigator';
import UserProfile114382Navigator from '../features/UserProfile114382/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile114422: { screen: UserProfile114422Navigator },
Tutorial114421: { screen: Tutorial114421Navigator },
NotificationList114393: { screen: NotificationList114393Navigator },
Settings114392: { screen: Settings114392Navigator },
Settings114384: { screen: Settings114384Navigator },
UserProfile114382: { screen: UserProfile114382Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
