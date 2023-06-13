import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Footer from '../src/components/Footer';
import { StatusBar } from 'expo-status-bar'
import ProductDetailProps from '../src/components/ProductDetailProps'
import EachProduct from '../src/components/EachProduct'
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from "@react-navigation/native";
const ProductDetail = () => {
    const navigation = useNavigation()
  return (
    <View className ="flex-1 relative bg-white"
    style ={{height:windowHeight}}
    >
    <StatusBar style='dark'/>
   

    <SafeAreaView className ="flex-1">
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
             
        <View className ="mt-10  ">
            <ScrollView
             pagingEnabled
             showsHorizontalScrollIndicator={false}
             showsVerticalScrollIndicator ={false}
             style ={{width: windowWidth, height: windowHeight}}
            >
                <ProductDetailProps/>

             </ScrollView>
        </View>



        </SafeAreaView>
       <Footer/>
        </View>
  )
}

export default ProductDetail