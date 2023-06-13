import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Footer from '../../src/components/Footer';
import { useNavigation } from "@react-navigation/native";
import ProductItem from '../../src/components/productItem';
import ShoppingPage from '../../src/components/shoppingPage';
import ShopDisplay from '../../src/components/ShopDisplay';
import ShopProfile from '../../src/components/oo35mm/ShopProfile';

export default function Shops35(){
    const navigation = useNavigation()
   
    return(
        <View className ="flex-1 relative bg-white">
        <StatusBar style='dark'/>
       

        <SafeAreaView className ="flex-1">
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
            
        <View className ="mx-auto">
        <Image source={require("../../assets/oo35mm.png")}
            className ="w-full top-10 -right-2 "
            style ={{height: 150, width:150}} />
       
       
       

        </View>
        <View style ={{borderWidth :1,}}
        className ="mt-10 border-slate-500 opacity-60"
        />
        <View className ="">
        <TouchableOpacity 
        style= {{borderWidth:1, borderColor: "gray"}}
        className ="items-center w-full py-2 bg-slate-200 rounded-md shadow-md"
        onPress={() => navigation.navigate('ProductDetail')}>
        <Text className ="text-lg font-bold pl-3">Our Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Blog')}>
        <Text className ="text-lg font-bold pl-3">Reviews</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Postoo35mm')}>
        <Text className ="text-lg font-bold pl-3">Post</Text>
        </TouchableOpacity>
        </View>

        <View className ="flex-1">
            <ScrollView 
            style ={{width: windowWidth}}
            >
            <ShopProfile/>
            </ScrollView>
      </View>
        
        </SafeAreaView>
        <Footer/>
        </View>
    );
}
