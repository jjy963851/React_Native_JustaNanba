

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Button} from 'react-native';
import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../config'
import {ref, onValue, push, set} from 'firebase/database';
import { firebase } from '../../config';
import { auth } from '../../firebase';
import React, {useState, useEffect} from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import Icon from 'react-native-vector-icons/FontAwesome';

const EachProduct = (props) => {
    const [clicked, setClicked] = useState(false);
    const [expanded2, setExpanded2] = useState(true);
    const [expanded1, setExpanded1] = useState(true);
    const [imageUrls, setImageUrls] = useState([]);

    const handleLikeImage = (imageUrl, item) => {
      // 현재 사용자의 식별자를 가져와야 합니다. 예시로 'userId'를 사용하였습니다.
      const email = auth.currentUser?.email; // 현재 사용자의 이메일 주소
  const userId = email?.split("@")[0]; // "@" 이전의 문자열 추출
  
    // 사용자의 좋아요 페이지에 이미지 정보를 저장합니다.
    const userLikedImagesRef = ref(db, `users/${userId}/likedImages/myImage`);
  
    const newImage = {
      imageUrl: imageUrl.uri,
      Title: item?.Title,
      Price: item?.price,
      Description: item?.Description,
      Routine: item?.Routine,
    };
      push(userLikedImagesRef, newImage)
        .then(() => {
          console.log('This Product has saved!');
        })
        .catch((error) => {
          console.error('Error Occured!:', error);
        });
    };





  return (
    
    <View className ="">

                 
    <ScrollView
showsVerticalScrollIndicator ={false}
showsHorizontalScrollIndicator ={false}
pagingEnabled
style= {{width: windowWidth, height: windowHeight}} 

className ="flex-1">
     <View className ="mx-auto mb-3">
    <Text className ="text-3xl font-bold">{props.Title}</Text>
</View>

    <View>
        <Image 
        style={{width: windowWidth, height:300}}
        source={props.Picture}/>


         <View className ="flex-row justify-between px-4 mt-3">
        <Text className ="font-semibold text-md">${props.price}</Text>
        <TouchableOpacity onPress={() => setClicked(!clicked)}>
        <View>
        <Button
                title="Like"
                onPress={() => handleLikeImage(props.Picture, props)}
                className = ""
              />
        </View>    
        </TouchableOpacity>
        </View>
{/**  <Button
                title="Like"
                onPress={() => handleLikeImage(imageUrl, item)}
                className = ""
              /> */}
        <View className ="mt-5">
    <Text
    className ="mx-auto text-base w-4/5">{props.Description}</Text>
  </View>

  <View className ="mt-3">
        <TouchableOpacity className = "flex-row justify-between px-4" onPress={() => setExpanded1(!expanded1)}>
        <Text className = "text-lg font-bold mr-2">Routine</Text>
        <Icon name={expanded1 ? 'plus' : 'minus'} size={20} />
       
      </TouchableOpacity>
      <Text
      
      className ={`${expanded1? "hidden" : " "} pl-5 mt-3`}>{props.Routine}</Text>
        </View>


  <View className ="mt-3">
        <TouchableOpacity className = "flex-row justify-between px-4" onPress={() => setExpanded2(!expanded2)}>
        <Text className = "text-lg font-bold mr-2">Ingredients</Text>
        <Icon name={expanded2 ? 'plus' : 'minus'} size={20} />
       
      </TouchableOpacity>

      <Text
      className ={`${expanded2? "hidden" : " "} pl-5 mt-3 leading-6`}>
        Water/Aqua/Eau (0)
        Dicaprylyl Carbonate (1-3)
        Glycerin (0)
        Cetearyl Alcohol (1)
        Cetearyl Olivate (1)
        Sorbitan Olivate (1)
        Sclerocarya Birrea Seed Oil (1)
        Bacillus/Soybean/ Folic Acid Ferment Extract (0-1)
        Nymphaea Alba Root Extract (1)
        sh-Oligopeptide-1 (1)
        sh-Oligopeptide-2 (1)
        sh-Polypeptide-1 (1)
        sh-Polypeptide-9 (1)
        sh-Polypeptide-11 (1)
        Copper Palmitoyl Heptapeptide-14 (0-1)
        Heptapeptide-15 Palmitate (0-1)
        Palmitoyl Tetrapeptide-7 (0-2)
        Palmitoyl Tripeptide-1 (0)
        Sodium Hyaluronate Crosspolymer (0-1)
        Sodium Hyaluronate (0-1)
        Panthenol (0)
        Ahnfeltiopsis Concinna Extract (0-1)
        Ascorbyl Palmitate (0-3)
        Sodium PCA (0-1)
        PCA (0)
        Olive Glycerides (1)
        Tocopherol (0-3)
        Dipotassium Glycyrrhizate (0-1)
        Phytosteryl/Octyldodecyl Lauroyl Glutamate (1)
        Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer (0-1)
        Carbomer (0-1)
        Sodium Lactate (0-1)
        Amodimethicone (0-1)
        Caprylyl Glycol (1)
        Polysorbate 60 (0-3)
        Cetyl Palmitate (1)
        Sorbitan Palmitate (1)
        Benzyl Alcohol (5)
        Hydroxyacetophenone (0-1)
        Disodium EDTA (1-3)
        1,2-Hexanediol (1)
        Sodium Hydroxide (0-3)
        Citric Acid (2)
      </Text>
        </View>

       

    </View>
</ScrollView>
</View>
  )
}

export default EachProduct