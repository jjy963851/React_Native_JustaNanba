import { View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import React, {useState, useEffect} from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer';
import { StatusBar } from 'expo-status-bar'
import { db } from '../../config'
import {ref, onValue} from 'firebase/database';
import { useNavigation } from '@react-navigation/native'
const Blog = () => {
    const navigation = useNavigation()
    const [todoData, setTodoData] = useState([]);

    useEffect (() => {
        const starCountRef = ref(db, 'posts/');
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
    <View className ="flex-1 relative bg-white">
    
    <Header/>
    <SafeAreaView className ="flex-1">
       
    <StatusBar style='dark'/>
      
       
    <ScrollView>
    <View className ="pt-10 mx-auto ">
        <Text className ="text-xl font-extrabold mx-auto pb-3"> Leave your Thought</Text>
        {
            todoData.map((item, index) => {
                return(
                    <View 
                    style ={{borderWidth:1, borderRadius:5,}}
                    
                    key = {index} className ="my-5 bg-slate-100 py-3">
                    
                        <Text className ="font-bold text-lg ml-1 mx-3">{item.title}</Text>
                        <Text className ="ml-2">{item.body}</Text>

                    </View>

                )
            })


        }
    </View>
    </ScrollView>
     </SafeAreaView>
     <Footer/>
     </View>
  )
}

export default Blog