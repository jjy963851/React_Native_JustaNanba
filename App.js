import 'react-native-gesture-handler';

import React from 'react';
import Profile from './screens/MyProfile/profile';
import Navigation from './src/components/Footer';
import Layout from './screens/layout';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LoginScreen from './screens/loginScreen';
import NewsPaper from './screens/newsPaper';
import Shops from './screens/Shops/shops';
import Shops35 from './screens/Shops/shops35';
import AddData from './src';
import Blog from './screens/Shops/blog';
import ForYou from './screens/ForYou';
import SkinForm from './screens/SkinForm';
import UploadScreen from './screens/UploadScreen';
import FetchImage from './screens/FetchImage';
import ShopProductPost from './screens/Shops/ShopProductPost';
import ProductDetail from './screens/ProductDetail';
import MyShelfs from './screens/MyProfile/MyShelfs';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarVisible: false, // Hide the bottom tab bar for all screens
        }}
      >
        <Stack.Screen options = {{headerShown : false}} name ="Login" component={LoginScreen} />
        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false, gestureEnabled: true}}
        name ="Home" component={Layout} />
         <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Says" component={NewsPaper} />

        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Shops" component={Shops} />

        
        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="oo35mm" component={Shops35} />

        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Data" component={AddData} />

        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Blog" component={Blog} />

    <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Foryou" component={ForYou} />

<Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Form" component={SkinForm} />
        
        <Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Picture" component={UploadScreen} />

<Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Fetch" component={FetchImage} />

<Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="Postoo35mm" component={ShopProductPost} />


<Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="ProductDetail" component={ProductDetail} />

<Stack.Screen 
        options = {{headerShown : false, tabBarVisible: false,  gestureEnabled: true}}
        name ="MyShelf" component={MyShelfs} />
      </Stack.Navigator>
    </NavigationContainer>
     //<Layout/>

  );
}

