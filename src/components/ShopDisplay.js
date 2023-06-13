import { View, Image, Text, ScrollView} from 'react-native';
import React, { useEffect, useState, } from 'react';
import { firebase } from '../../config';
import { db } from '../../config'
import {ref, onValue} from 'firebase/database';

const ShopDisplay = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const storageRef = firebase.storage().ref().child('ShopOwner'); // 폴더 이름으로 변경해주세요

    try {
      const imageRefs = await storageRef.listAll();
      const urls = await Promise.all(
        imageRefs.items.map((item) => item.getDownloadURL())
      );
      setImageUrls(urls);
    } catch (error) {
      console.log(error);
    }
  };


  const [todoData, setTodoData] = useState([]);

  useEffect (() => {
      const starCountRef = ref(db, 'ShopOwner/');
       onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          const newPosts = Object.keys(data).map(key => ({
              id: key,
              ...data[key]
          }));

          

              console.log(newPosts);
              setTodoData(newPosts);
             
          
          
      });
          
  }, []);
  return (
    
    <View className ="mx-auto">
     
      {imageUrls.map((imageUrl, index) => (
      
        <View key={index}>
          
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 300, height: 200, borderRadius:5 }}
        className="my-5"
      />
      
      {todoData.map((item, innerIndex) => {
        if (innerIndex === index) {
          return (
            <View key={innerIndex} className="flex-row justify-between px-3">
              <Text className="font-bold text-lg">{item.title}</Text>
              <Text>${item.body}</Text>
            </View>
          );
        }
        return null;
      })}
          
        </View>
        
  ))}
    </View>
   
  );
};

export default ShopDisplay;
