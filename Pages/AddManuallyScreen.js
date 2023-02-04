import { StatusBar } from 'expo-status-bar';
import { useState, useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Image,BackHandler, Button,TextInput, Input, label  } from 'react-native';
import { FlatList } from 'react-native';
import FlatButton from '../components/buttons.js';
import InputLabel from '../components/textLabels.js';


export default function AddManuallyScreen({navigation}) {
    const [Type,setType]=useState('Type');
    const [Volume,setVolume]=useState('Volume');
    const [foodTypesArr, setFoodTypesArr]=useState([]);
    const inputRef=useRef(null);
    const inputRef2=useRef(null);



    const pressAdd = (Type,Volume) => {
      const foodTypesTemp=[...foodTypesArr];
      foodTypesTemp.push({Type});
      foodTypesTemp.push({Volume});
      setFoodTypesArr(foodTypesTemp);
      console.log(foodTypesTemp);
      inputRef.current.clear();
      inputRef2.current.clear();
    };


    return(
         <View style={styles.titles}>
            <Text style={styles.title}>Unfortunately we could not get the results for you. Feel free to add the food manually.</Text>
            <TextInput style={styles.inputStyle1} placeholder={'Volume'} onChangeText={(val)=>setType(val)} ref={inputRef} ></TextInput>
            <TextInput style={styles.inputStyle2} placeholder={'Type'} onChangeText={(val) => setVolume(val)} ref={inputRef2}></TextInput>            
            <FlatButton textButton={"Pluse"} onPress={() => pressAdd(Type, Volume)}  num={'7'}/>
            <View style={{top: -150}}>
                <FlatButton textButton={"Next"}  onPress={() => navigation.navigate('ResultsScreen')} num={'1'}/>
            </View>
            <View style={{right:150}}>
                 <Button title='Exit' onPress={exitFunc} color='red' />
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
    title :{
        fontSize: 20,
        fontWeight: 'bold',
        color : 'green',
        top: -300,
      },
  
  
    titles : {
      marginTop: '50%',
      width : '100%',
      alignItems: 'center',
      bottom: -300
    },


    buttonDone: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'lime',
        bottom: -35,
    },

    inputStyle1:{
      borderWidth : 1,
      borderColor: '#777',
      padding: 8,
      margin : 10,
      width: 150,
      bottom: 220,
      color : 'black',
  },

  inputStyle2:{
          borderWidth : 1,
          borderColor: '#777',
          padding: 8,
          margin : 10,
          width: 150,
          //height : 20,
          bottom: 210,
          color : 'black',
      },
});




const exitFunc = () => {
    BackHandler.exitApp();
  };

