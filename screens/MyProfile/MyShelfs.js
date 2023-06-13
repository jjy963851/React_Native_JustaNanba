import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar'
import Footer from '../../src/components/Footer'
import { firebase} from '../../config';
import { db } from '../../config'
import { useNavigation } from "@react-navigation/native";
import { auth } from '../../firebase';
import {ref, onValue, push, set} from 'firebase/database';
import EachProduct from '../../src/components/EachProduct';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MyShelfs = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [productInfo, setProductInfo] = useState([]);

    useEffect(() => {
      fetchLikedImages();
    }, []);
  
    const fetchLikedImages = async () => {
        const email = auth.currentUser?.email; // 현재 사용자의 이메일 주소
        const userId = email?.split("@")[0]; 
        try {
          // Firebase Realtime Database에서 좋아요한 이미지의 URL 가져오기
          const likedImagesRef = ref(db, `users/${userId}/likedImages/myImage`);
          onValue(likedImagesRef, (snapshot) => { // onValue 함수를 사용하여 실시간으로 데이터를 가져옴
            const likedImagesData = snapshot.val();
            if (likedImagesData) {
              const imageIds = Object.keys(likedImagesData);
              const urls = imageIds.map((imageId) => likedImagesData[imageId].imageUrl);
              setImageUrls(urls);
              setProductInfo(imageIds.map((imageId) => likedImagesData[imageId]));
            } else {
              setImageUrls([]);
              setProductInfo([]);
            }
          });
        } catch (error) {
          console.log(error);
        }
      };








    const navigation = useNavigation()

  return (
    <View
        
    className ="flex-1 relative bg-white">
        <StatusBar style='dark'/>

        <SafeAreaView 
        
        className ="flex-1">



        
        <View className="w-full absolute top-12">
         <View className ="px-12 flex-row justify-between items-center">


             <TouchableOpacity onPress={() => navigation.navigate('Foryou')}>
                <Text className ="text-base font-semibold" >
                    For you
                </Text >
            </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Says')}>
                <Text  className ="text-base font-semibold" >
                    Say
                </Text>  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Shops')}>
                <Text  className ="text-base font-semibold">
                    Shops
                </Text>
                </TouchableOpacity>
            
        </View>
        </View>

        <View className ="mx-auto mt-10 ">
            <Text className ="font-bold text-2xl "> My Shelf</Text>
            
        </View>

        <View className ="">
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator ={false}
          style ={{width: windowWidth, height: windowHeight}}
         >
          
          {imageUrls.map((imageUrl, index) => (
             
            <View key={index}>
              
              <EachProduct
                Picture={{ uri: imageUrl }}
                Title={productInfo[index]?.Title}
                price={productInfo[index]?.Price}
                Description={productInfo[index]?.Description}
                Routine={productInfo[index]?.Routine}
              />
              
            </View>
           
          ))}
       
     </ScrollView>
     </View>
        </SafeAreaView>
        
        <Footer/>
        </View>
  )
}

export default MyShelfs