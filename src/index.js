import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React , {useState} from 'react'
import { db } from '../config';
import {ref, set} from 'firebase/database';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import Footer from '../src/components/Footer';
const AddData = () => {
    const navigation = useNavigation()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    //function to add data to firebase realtimem db

    const DataAddOn = () => {
        set(ref(db, 'posts/' + title), {
            title: title,
            body: body,
        });
        setTitle('')
        setBody('')
        
    }
  return (
    <View className ="flex-1 relative bg-white">
    <SafeAreaView className = "flex-1">
        <StatusBar style='dark'/>
        <View className="w-full absolute top-12">
             <View className ="px-12 flex-row justify-between items-center">


             <TouchableOpacity onPress={() => navigation.replace('Foryou')}>
                    <Text className ="text-base font-semibold" >
                        For you
                    </Text >
                </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Says')}>
                    <Text  className ="text-base font-semibold" >
                        Say
                    </Text>  
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.replace('Shops')}>
                    <Text  className ="text-base font-semibold">
                        Shops
                    </Text>
                    </TouchableOpacity>
                
            </View>
            </View>
        
    <View className ="mx-auto mt-10 ">
      <Text className ="text-xl font-bold">Leave your Thought!</Text>
      <TextInput
        style ={{borderWidth:1, borderRadius:5}}
        placeholder='Title'
        placeholderTextColor="gray"
        className ="bg-slate-300 mt-10 py-2"
        value ={title}
        onChangeText={(text) => setTitle(text)}
      />

    <TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='Body'
        placeholderTextColor="gray"
       className ="bg-slate-300 mt-10 py-10"
        value ={body}
        onChangeText={(body) => setBody(body)}
      />

      <Button
      style ={{borderWidth:1, borderRadius:5}}
      title = "Submit"
      className ="pt-3"
      onPress={DataAddOn}
      
      />
    </View>
    </SafeAreaView>
    <Footer/>
    </View>
  )
}

export default AddData
