import { View, Text, SafeAreaView, TouchableOpacity, Image, styles, StyleSheet,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Header from '../src/components/Header'

import { firebase, storage } from '../config';
import { ScrollView } from 'react-native'
import Footer from '../src/components/Footer'
const FetchImage = () => {
    const [images, setImages] = useState([]);
  
    useEffect(() => {
      fetchImages();
    }, []);
  
    const fetchImages = async () => {
        const storageRef = firebase.storage().ref();
    
        try {
          const imageRefs = await storageRef.listAll();
          const imageUrls = await Promise.all(
            imageRefs.items.map(async (item) => {
              const url = await item.getDownloadURL();
              return url;
            })
          );
          setImages(imageUrls);
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <View className ="flex-1 relative bg-white">
        <StatusBar style='dark'/>
        <Header/>
        <SafeAreaView className ="flex-1">
        <Text className ="mt-16 font-extrabold text-3xl mx-auto">
                     Gallery
                </Text>
        <ScrollView 
         pagingEnabled
        className="">
                <View className ="mx-auto">

                

               
                
                
                    <View className =" flex-wrap justify-center mx-auto">
                        {images.map((imageUrl, index) => (
                            <View className ="flex-1">
                        <Image
                            key={index}
                            source={{ uri: imageUrl }}
                            className ="my-10"
                            style ={{width: 300, height: 300}}
                        />
                       </View>
                        ))}
                    </View>
                  
                


                  
                      
                </View>
                </ScrollView> 
        </SafeAreaView>
        <Footer/>
    </View>
  )
}


export default FetchImage

