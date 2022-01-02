import * as React from 'react';

import StackNavigator from './StackNavigator';
import Profile from '../screens/Profile';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown : false}}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigation;