import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity,} from 'react-native';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../config'
import {ref, onValue} from 'firebase/database';
import React, {useState, useEffect} from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


import Icon from 'react-native-vector-icons/FontAwesome';

export default function Profile({item}){
  const [clicked, setClicked] = useState(false);
    const navigation = useNavigation()
  
  const handleSignout= () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  
  const [todoData, setTodoData] = useState([]);

    useEffect (() => {
        const starCountRef = ref(db, 'SkinForms/');
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


return(
  

 
<View>

                 
                    <ScrollView
 showsVerticalScrollIndicator ={false}
 showsHorizontalScrollIndicator ={false}
 pagingEnabled
style= {{width: windowWidth, height: windowHeight}} 

className ="flex-1">
                     <View className ="flex-row justify-between px-4">
    <TouchableOpacity onPress={() => navigation.navigate('MyShelf')}>
    <Text className ="font-semibold text-md pb-1">{auth.currentUser?.email}</Text>
    </TouchableOpacity>

    <TouchableOpacity
    onPress={handleSignout}
    >
    <Text className ="font-semibold text-md">Sign out</Text>
    </TouchableOpacity>
  </View>

<Image 
style={{width: windowWidth}}
source={require('../../assets/user.jpg')}/>
                  <View className ="flex-row justify-between px-4 mt-3">
<Text className ="font-semibold text-md">{item.city}</Text>
<TouchableOpacity onPress={() => setClicked(!clicked)}>
<View>
  {clicked ? (<Icon name="heart" size={20} color="red" />) : (<Icon name="heart-o" size={20} color="red" />)}
</View>    
</TouchableOpacity>
</View>

  <View className ="mt-5">
    <Text
    className ="mx-auto text-base w-4/5">{item.descirption}</Text>
  </View>

  <View
  style={{flexDirection:"row",justifyContent:"space-evenly" }} 
  className ="mt-5">
    <View className ="">
  <Text className ="font-semibold">Skin Type</Text>
  <Text className="pt-3">{item.skinType}</Text>
  </View>
  <View>
  <Text className ="font-semibold">Concerns</Text>
  <Text className="pt-3">{item.concern}</Text>
  </View>
  <View>
  <Text className ="font-semibold">Products</Text>
  <Text className="pt-3">{item.product}</Text>
  </View>
  <View>
  <Text className ="font-semibold">Price Range</Text>
  <Text className="pt-3">${item.price}</Text>
  </View>
  </View>
  </ScrollView>
  </View>
              









);

}
Profile.navigationOptions = {
  gestureEnabled: true, // Enable swipe gesture to go back
};