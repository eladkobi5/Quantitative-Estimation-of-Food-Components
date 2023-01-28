import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler  } from 'react-native';
import FlatButton from '../components/buttons.js';
import InputLabel from '../components/textLabels.js';
import HomeScreen from './HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function WelcomeScreen() {
    return(
        <View style={styles.titles}>
            <Text style={styles.title}>Welcome user!</Text>
        </View>
            

    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    enterContiner: {
  
      width : '100%',
      height : '100%',
  
    },
  
  
    titles : {
      marginTop: '50%',
      width : '100%',
      alignItems: 'center',
    },
  
    title :{
      fontSize: 20,
      fontWeight: 'bold',
      color : 'green',
      top: -150,
    },
});