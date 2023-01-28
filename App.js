import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler  } from 'react-native';
import FlatButton from './components/buttons.js';
import InputLabel from './components/textLabels.js'
import HomeScreen from './Pages/HomeScreen.js';
import WelcomeScreen from './Pages/WelcomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" options={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

