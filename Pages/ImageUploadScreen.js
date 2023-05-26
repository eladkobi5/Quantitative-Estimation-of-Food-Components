import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';

export default function ImageUploadScreen({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle selecting an image from the gallery
  const selectImageFromGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Please allow access to the media library.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error('Error selecting image from gallery:', error);
    }
  };

  // Function to handle taking a new photo
  const takeNewPhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Please allow access to the camera.');
        return;
      }

      const result = await ImagePicker.launchCameraAsync();
      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error('Error taking new photo:', error);
    }
  };

// Function to send image to API and handle the response
const sendImageToAPI = async () => {
  try {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', {
        uri: selectedImage,
        type: 'image/jpeg', // Adjust the MIME type based on your image format
        name: 'image.jpg' // Adjust the filename as needed
      });

      const response = await fetch('your-api-endpoint', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      const data = await response.json();
      // Process the JSON response as needed (e.g., save to a variable, state, or database)
      console.log('API response:', data);

      // Send the retrieved JSON data to another API
      await sendJSONToAnotherAPI(data);
      navigation.navigate('SegmentScreen', {jsonDataList});
    } else {
      Alert.alert('No image selected', 'Please choose an image before sending.');
    }
  } catch (error) {
    console.error('Error sending image to API:', error);
  }
};

// Define a state variable to store the list of JSON data
const [jsonDataList, setJsonDataList] = useState([]);

// Function to send the retrieved JSON data to another API
const sendJSONToAnotherAPI = async (jsonData) => {
  try {
    const response = await fetch('another-api-endpoint', {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const responseData = await response.json();
    console.log('Another API response:', responseData);
    
    // Save the JSON data in the list
    setJsonDataList(prevList => [...prevList, responseData]);
  } catch (error) {
    console.error('Error sending JSON data to another API:', error);
  }
};

// Usage outside the API function
// You can access the jsonDataList variable and use the stored JSON data as needed


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200, marginBottom: 10 }} />}
      <Button title="Choose from Gallery" onPress={selectImageFromGallery} />
      <Button title="Take a New Photo" onPress={takeNewPhoto} />
      <Button title="Send" onPress={sendImageToAPI} />
    </View>
    



  );
}
