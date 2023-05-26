import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { firebase } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';


export default function ShowSegmentScreen({ route }) {
    const { jsonDataList } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    // Function to retrieve images and labels from Google Cloud Storage
    const retrieveDataFromStorage = async () => {
      const storage = new Storage(); // Create a new client instance

      try {
        for (const jsonData of jsonDataList) {
          const bucketName = 'your-bucket-name';
          const imagePath = jsonData.imagePath;
          const label = jsonData.label;

          const [file] = await storage.bucket(bucketName).file(imagePath).download();

          setImages(prevImages => [...prevImages, file]);
          setLabels(prevLabels => [...prevLabels, label]);
        }
      } catch (error) {
        console.error('Error retrieving data from Google Cloud Storage:', error);
      }
    };

    retrieveDataFromStorage();
  }, [jsonDataList]);

  const handleNextImage = () => {
    if (currentIndex < jsonDataList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleLabelChange = (event) => {
    const { value } = event.target;
    setLabels(prevLabels => {
      const updatedLabels = [...prevLabels];
      updatedLabels[currentIndex] = value;
      return updatedLabels;
    });
  };

  return (
    <div>
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
      <div>
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>
      <div>
        <input
          type="text"
          value={labels[currentIndex] || ''}
          onChange={handleLabelChange}
        />
      </div>
    </div>
  );
}
