import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,BackHandler} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FlatButton from '../components/buttons.js';







export default function TakeImageScreen({navigation}) {
    const [image, setImage] = useState(null);
    const [pickedImagePath, setPickedImagePath] = useState('');
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
      const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
    
        // Explore the result
        console.log(result);
    
        if (!result.cancelled) {
          setPickedImagePath(result.uri);
          console.log(result.uri);
        }
    }



    return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.title}>Please upload a photo</Text>
                 <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                <Button title="Open camera" onPress={openCamera} />
                <FlatButton textButton={"Next"}  onPress={() => navigation.navigate('WelcomeScreen')} num={'1'}/>
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
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

    title :{
        fontSize: 20,
        fontWeight: 'bold',
        color : 'green',
        top: -150,
      },

    });