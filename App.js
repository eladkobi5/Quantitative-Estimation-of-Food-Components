import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler  } from 'react-native';
import FlatButton from './components/buttons.js';
import InputLabel from './components/textLabels.js'
import HomeScreen from './Pages/HomeScreen.js';
import WelcomeScreen from './Pages/WelcomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TakeImageScreen from './Pages/TakeImageScreen';
import ResultsScreen from './Pages/ResultsScreen';
import AddManuallyScreen from './Pages/AddManuallyScreen';
import ProcessingScreen from './Pages/ProcessingScreen.js';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProcessingScreen" options={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TakeImageScreen" component={TakeImageScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddManuallyScreen" component={AddManuallyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProcessingScreen" component={ProcessingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

