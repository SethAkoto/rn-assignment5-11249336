import React from 'react';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import MyCards from './MyCards';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { ThemeProvider } from './ThemeContext';


const Tab = createBottomTabNavigator();
function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'cog' : 'cog-outline';
        }  else if (route.name === 'My Cards') {
            iconName = focused ? 'credit-card' : 'credit-card-outline'; 
          }
          
        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      }
    }) } >
        
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="My Cards" component={MyCards} options={{headerShown: false}} />
        <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}} />
        
      </Tab.Navigator>
      </NavigationContainer>
      </ThemeProvider>
  );
}

export default App;
