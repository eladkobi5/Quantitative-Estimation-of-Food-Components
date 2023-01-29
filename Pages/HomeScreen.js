import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler  } from 'react-native';
import FlatButton from '../components/buttons.js';
import InputLabel from '../components/textLabels.js';
//import WelcomeScreen from './WelcomeScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
        <View style={styles.enterContiner}>
  
          <View style={styles.titles}>
            <Text style={styles.title}>Welcome to Nutri!</Text>
            <Image source={require('../assets/SignInImage.jpg')} style={styles.image1}/>
            <Image source={require('../assets/person.jpg')} style={styles.image2}/>
            <FlatButton textButton={"Next"}  onPress={() => navigation.navigate('WelcomeScreen')} num={'1'}/>
            <FlatButton textButton={"New member?"} num={'2'}/>
            <InputLabel inputText={'id'} num={'1'}/>
            <InputLabel inputText={'password'} num={'2'}/>
            
          </View>
        </View>
  
  
  
  
  
        <StatusBar style="auto" />
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
  
    image1 : {
      flexDirection : 'row',
      width : '90%',
      height : '45%',
      alignItems: 'center',
      //position: 'absolute',
      top: -130,
      //bottom: 0,
      //left: 0,
      //right: 0,
      
    },
  
    image2 : {
      flexDirection : 'row',
      width : '30%',
      height : '20%',
      alignItems: 'center',
      bottom: -10,
      //position: 'absolute',
      top: -120,
      //bottom: 0,
      //left: 0,
      //right: 0,
      
    },
  
  });
  
  
  
  
  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
  image2 : {
    flexDirection : 'row',
    width : '30%',
    height : '30%',
    //alignItems: 'low',
    //justifyContent: 'center',
    
  },
  
  });
  
  
  const testFunc = () => {
    BackHandler.exitApp();
  };

  //const nextFunc = (navigation) => {
    //navigation.navigate('WelcomeScreen')
  //}
    