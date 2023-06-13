import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Navigation from '../../src/components/Footer';
import { useNavigation } from "@react-navigation/native";
import Footer from '../../src/components/Footer';
export default function Shops () {
    const navigation = useNavigation()
    const shops = [
        { id: 1, name: 'oo35mm' },
        { id: 2, name: 'Shepora' },
        { id: 3, name: 'Innisfree' },
        { id: 4, name: 'OliveYoung' },
        { id: 5, name: 'Nivia' },
      ];

    return(
        <>
          <View className ="flex-1 relative bg-white">
            <StatusBar style='dark'/>

            <SafeAreaView className ="flex-1">


            <Image source={require("../../assets/skincare.png")}
            className ="w-full absolute bottom-10 left-5 opacity-50"
            style ={{height: 150, width:150}} />


                <Text className ="mx-auto pt-5 font-bold text-lg"> Our Shops</Text>
                    <View className ="mx-auto w-2/3 gap-y-10  pt-10">
                    {shops.map((shop) => (
                        <TouchableOpacity
                        className =" items-center bg-indigo-500"
                        key={shop.id}
                        style ={{borderWidth : 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 10,}}
                        onPress={() => navigation.replace('oo35mm')}
                        >
                        <Text className ="text-lg font-bold text-white">{shop.name}</Text>
                        </TouchableOpacity>
                    ))}
                    </View>
            </SafeAreaView>
            <Footer/>
        </View>
        
        </>
    );
}