import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler, Button,TextInput, Input, label  } from 'react-native';
import { FlatList } from 'react-native';
import FlatButton from '../components/buttons.js';
import InputLabel from '../components/textLabels.js';


export default function AddManuallyScreen({navigation}) {
    return(
         <View style={styles.titles}>
            <Text style={styles.title}>Unfortunately we could not get the results for you. Feel free to add the food manually.</Text>
            <InputLabel inputText={'Type'} num={'1'}/>
            <InputLabel inputText={'Volume'} num={'2'}/>
            <FlatButton textButton={"Pluse"} num={'7'}/>
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
});




const exitFunc = () => {
    BackHandler.exitApp();
  };