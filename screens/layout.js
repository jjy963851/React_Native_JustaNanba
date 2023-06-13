import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native';
import Navigation from '../src/components/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import Profile from './MyProfile/profile';
import Product from './product';
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { useState, useEffect } from 'react';
const windowHeight = Dimensions.get('window').height;
import LayoutForProfile from './layoutForProfile';
import Footer from '../src/components/Footer';

export default function Layout(){
    


    const navigation = useNavigation()
    const productImage = require('../assets/product1.jpg');
    const productImage1 = require('../assets/product2.jpg');
    const productImage2 = require('../assets/product3.jpg');


    
    return(
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
            
            <View className ="mt-10 py-2">
            <ScrollView
             pagingEnabled
             horizontal
             
             showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator ={false}
            >
            <LayoutForProfile/>
            
            <Product title ="Rice Wash Skin-Softening Cleanser" Image ={productImage}/>
            <Product title ="Jeju Pomegranate Revitalizing Serum" Image ={productImage1}/>
            <Product title ="CICAPAIR™ TIGER GRASS COLOR CORRECTING TREATMENT SPF30" Image ={productImage2}/>
            </ScrollView>
            </View>

            </SafeAreaView>

            <Footer/>
        </View>
        
    );
}

