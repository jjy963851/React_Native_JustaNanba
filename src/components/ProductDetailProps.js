import { View, Text, Dimensions, ScrollView, Image, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { firebase } from '../../config';
import EachProduct from './EachProduct';
import {ref, onValue, push, set} from 'firebase/database';
import { db } from '../../config'
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { auth } from '../../firebase';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome';


const ProductDetailProps = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetchImages();
    fetchPosts();
  }, []);

  const fetchImages = async () => {
    try {
      const storageRef = firebase.storage().ref().child('Products');
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

  useEffect(() => {
    const starCountRef = ref(db, 'Products/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));

      setTodoData(newPosts);
    });

  }, []);


  const fetchPosts = () => {
    const starCountRef = ref(db, 'Products/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setTodoData(newPosts);
    });
  };

 

  return (
   
    <ScrollView
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator ={false}
    style ={{width: windowWidth, height: windowHeight}}
    >
       
      {imageUrls.map((imageUrl, index) => {
        const item = todoData[index]; // Get the corresponding item from the todoData array

        return (
          <View key={index} className ="flex-1">
            
          
            
             
            <EachProduct Picture={{ uri: imageUrl }} Title={item?.Title} price = {item?.Price} Description ={item?.Description} Routine ={item?.Routine} />
          </View>
        );
      })}
    

    </ScrollView>
  );
};

export default ProductDetailProps;
