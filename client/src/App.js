import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/Home';
import ListScreen from './Screens/List.js';
import SearchScreen from './Screens/Search.js';
import {StyleSheet, View} from 'react-native';
import SvgHome from './svg/Home';
import SvgGrid from './svg/Grid';
import SvgSearch from './svg/Search';

function App() {
  const Tab = createBottomTabNavigator();

  const style = StyleSheet.create({
    searchButton: {
      marginTop: -10,
      borderRadius: 999,
      width: 80,
      height: 80,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    inner: {
      width: 60,
      height: 60,
      borderRadius: 999,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => <SvgHome stroke="blue" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={style.searchButton}>
                <View style={style.inner}>
                  <SvgSearch stroke="white" />
                </View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarIcon: ({focused}) => <SvgGrid stroke="blue" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
