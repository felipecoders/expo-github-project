import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default createAppContainer(
  createSwitchNavigator({
    Main,
    Repository,
  }, {
    initialRouteName: 'Main'
  })
);