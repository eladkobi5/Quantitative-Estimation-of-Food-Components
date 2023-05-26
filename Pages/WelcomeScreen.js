import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler, Alert} from 'react-native';
import FlatButton from '../components/buttons.js';
import InputLabel from '../components/textLabels.js';
//import HomeScreen from './HomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import TakeImageScreen from './TakeImageScreen.js';

export default function WelcomeScreen({navigation}) {
    return(
        <View style={styles.titles}>
            <Text style={styles.title}>Welcome user!</Text>
           

            <View style={styles.buttonContainer}>
                <FlatButton textButton={"Upload new meal"}  onPress={() => navigation.navigate('TakeImageScreen')} num={'1'}/>
            
                 <FlatButton textButton={"Chat with us!"} num={'3'} onPress={createTwoButtonAlert}/>
                 <FlatButton textButton={"Exit"} num={'4'} onPress={exitFunc}/>
            </View>
            <View style={styles.buttonContainer}>
               <FlatButton textButton={"View previous meals"} num={'2'}/>
            </View>
      
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

    buttonContainer: {
      marginBottom: -50,
    },

    buttonContainer2: {
      marginBottom: 5,
      top: 100,
    },

});


const exitFunc = () => {
  BackHandler.exitApp();
};

const createTwoButtonAlert = () =>
Alert.alert('Alert Title', 'Please contact us at eladkobi@gmail.com or samrr93@gmail.com', [
  {text: 'OK', onPress: () => console.log('OK Pressed')},
]);
