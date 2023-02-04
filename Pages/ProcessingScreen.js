import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler, Button,TextInput  } from 'react-native';
import { FlatList } from 'react-native';
import FlatButton from '../components/buttons.js';




export default function ProcessingScreen({navigation}) {
        return(
            <View style={styles.titles}>
              <Text style={styles.title}>Here is what we found!</Text>
              <View style={{right:150, bottom: -200}}>
                  <Button title='Exit' onPress={exitFunc} color='red' />
              </View>
              <View style={{top: -50, bottom: 200}}>
                  <FlatButton textButton={"Continue"}  onPress={() => navigation.navigate('ResultsScreen')} num={'1'}/>
              </View>

              <View style={{top: 0, bottom: -300}}>
                  <Button title='Insert Manually'  onPress={() => navigation.navigate('AddManuallyScreen')} color='purple' />
              </View>
              <View style={{top: 10, bottom: -300}}>
                  <Button title='Try Again'  color='yellow' />
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

    });


const exitFunc = () => {
    BackHandler.exitApp();
};