import { View, Text, TouchableOpacity, SafeAreaView, Alert, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {ref, set} from 'firebase/database';
import Header from '../../src/components/Header';
import { StatusBar } from 'expo-status-bar';
import Footer from '../../src/components/Footer';
import { firebase, db } from '../../config';





const UploadScreen = () => {

 
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  //function to add data to firebase realtimem db

  const DataAddOn = () => {
    const timestamp = Date.now().toString(); // Generate a timestamp as a string
  
    set(ref(db, `ShopOwner/${timestamp}_${title}`), {
      title: title,
      body: body,
    });
  
    setTitle('');
    setBody('');
  };

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
    const timestamp = Date.now().toString();
    const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
    const storageRef = firebase.storage().ref().child(`ShopOwner/${timestamp}_${title}` + filename); // 폴더 이름으로 변경해주세요

    try {
      await storageRef.put(blob);
    } catch (error) {
      console.log(error);
    }

    setUploading(false);
    Alert.alert("Photo Uploaded successfully!");
    setImage(null);
  };

  return (
    <View className="flex-1 relative bg-white">
      
       
         
    <StatusBar style='dark' />
    <Header />
    <ScrollView>
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

        
        </View>

        
      <TextInput
        style ={{borderWidth:1, borderRadius:5}}
        placeholder='Product Name'
        placeholderTextColor="gray"
        className ="bg-slate-300 mt-10 py-2"
        value ={title}
        onChangeText={(text) => setTitle(text)}
      />

    <TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='Price'
        placeholderTextColor="gray"
       className ="bg-slate-300 mt-5 py-2"
        value ={body}
        onChangeText={(body) => setBody(body)}
      />

<TouchableOpacity
            className="py-3 mt-5 bg-indigo-300  "
            style={{ borderWidth: 1, borderRadius: 5 }}
            onPress={() => {
              DataAddOn();
              uploadImage();
            }}
              
          >
            <Text className ="mx-auto">Submit</Text>
          </TouchableOpacity>



          
     
      </View>
    </SafeAreaView>
    </ScrollView>
    <Footer/>
  </View>
  );
};

export default UploadScreen;
