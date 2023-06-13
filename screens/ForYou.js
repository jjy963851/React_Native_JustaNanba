import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from "@react-navigation/native";
import Navigation from '../src/components/Footer';

const ForYou = () => {
    const navigation = useNavigation()

   

  return (
    <View className ="flex-1 relative bg-white">
            <StatusBar style='dark'/>

            <SafeAreaView className ="flex-1">


            <Text className ="mx-auto pt-5 font-bold text-xl"> For you</Text>
                    <View className ="mx-auto w-2/3 gap-y-10  pt-10">
                    
                        <TouchableOpacity
                        className =" items-center bg-indigo-500"
                       
                        style ={{borderWidth : 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 10,}}
                        onPress={() => navigation.replace('Form')}
                        >
                        <Text className ="text-lg font-bold text-white">Submit your Skin type Form</Text>
                        </TouchableOpacity>
                   
                    </View>


                    <View className ="mx-auto w-2/3 gap-y-10  pt-10">
                    
                    <TouchableOpacity
                    className =" items-center bg-indigo-500"
                   
                    style ={{borderWidth : 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 10,}}
                    onPress={() => navigation.replace('Data')}
                    >
                    <Text className ="text-lg font-bold text-white">Submit comments in Blog!</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                    className =" items-center bg-indigo-500"
                   
                    style ={{borderWidth : 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 10,}}
                    onPress={() => navigation.replace('Picture')}
                    >
                    <Text className ="text-lg font-bold text-white">Post Image</Text>
                    </TouchableOpacity>
               
                </View>

                </SafeAreaView>
                </View>
  )
}

export default ForYou