import { View, Text, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { firebase, db } from '../config';
import Header from '../src/components/Header';
import { StatusBar } from 'expo-status-bar';
import Footer from '../src/components/Footer';

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);



  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = { uri: result.uri };
    console.log(source);
    setImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);

      const response = await fetch(image.uri);
      const blob = await response.blob();

      const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
       var ref = firebase.storage().ref().child(filename).put(blob);

       try {
        await ref;

       } catch(error){
        console.log(error);
       }
       setUploading(false);
       Alert.alert(
        "Photo Uploaded successfully!"
       );
       setImage(null);
    };

    
  

  

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar style='dark' />
      <Header />
      <SafeAreaView className="flex-1">
        <View className="mx-auto">
          <Text className="mt-24 font-extrabold text-3xl">
            Upload your Image
          </Text>

          <TouchableOpacity
            className="py-3 mt-5 bg-indigo-300"
            style={{ borderWidth: 1, borderRadius: 5 }}
            onPress={pickImage}
          >
            <Text>Pick an Image</Text>
          </TouchableOpacity>

          <View>
            {image && <Image source={{ uri: image.uri }} style={{ width: 300, height: 300 }} />}

            <TouchableOpacity
              className="py-3 mt-5 bg-indigo-300"
              style={{ borderWidth: 1, borderRadius: 5 }}
              onPress={uploadImage}
                
            >
              <Text>Upload your Image</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <Footer/>
    </View>
  )
};

export default UploadScreen
