import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,BackHandler, Button,TextInput, Alert  } from 'react-native';
import { FlatList } from 'react-native';
import FlatButton from '../components/buttons.js';
import React, { useState, useEffect  } from 'react';


export default function segmentScreen({navigation}) {
    const [imageUrl, setImageUrl] = useState(null);

    const handleShowImage = () => {
      // Set the image URL to be displayed
      setImageUrl('https://cdn.pixabay.com/photo/2018/01/15/21/38/nature-3084841_1280.jpg');
    };
  
    useEffect(() => {
      // Reset the state to default values when the component mounts
      setImageUrl(null);
    }, []);


    return(

      <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Exit App" onPress={exitFunc} />
      </View>
      <View style={styles.buttonContainer}>
        
        <Button title="Show Image" onPress={handleShowImage} />
      </View>
      <View style={styles.buttonContainer}>
      <Button title='next Segement' onPress={() => navigation.navigate('segmentScreen')}/>
      </View>


      {imageUrl && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
      )}
    </View>
  );

}


const exitFunc = () => {
    BackHandler.exitApp();
  };
const handleShowImage = () => {
    // Set the image URL to be displayed
    setImageUrl('https://example.com/path/to/image.jpg');
  };

  const createTwoButtonAlert = () =>
  Alert.alert('Alert Title', 'The meal has been saved!', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      marginBottom: 10,
    },

    imageContainer: {
      width: 200,
      height: 200,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });


