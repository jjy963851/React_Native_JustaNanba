import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, {useState} from 'react'
import Header from '../src/components/Header'
import { StatusBar } from 'expo-status-bar'

import { db } from '../config';
import {ref, set} from 'firebase/database';
import Footer from '../src/components/Footer';
const SkinForm = () => {

    const [city, setCity] = useState('');
    const [descirption, setDescirption] = useState('');
    const [skinType , setSkinType] = useState('');
    const [concern, setConcern] = useState('');
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');

    const DataAddOn = () => {
        set(ref(db, 'SkinForms/'  + city), {
           
            city : city,
            descirption: descirption,
            skinType: skinType,
            concern : concern,
            product: product,
            price: price,
        });
        
        setCity('')
        setDescirption('')
        setSkinType('')
        setConcern('')
        setProduct('')
        setPrice('')
    }

  return (
    <View className ="flex-1 relative bg-white">
    <StatusBar style='dark'/>
    <Header/>
    <SafeAreaView className ="flex-1">

    <View className =" gap-3 w-2/3 mx-auto pt-16">
      <Text className ="text-xl font-bold">Skin Forms</Text>
      <TextInput
        style ={{borderWidth:1, borderRadius:5}}
        placeholder='Type your City'
        placeholderTextColor="gray"
        className ="bg-slate-300 py-3 ml-4 pl-3"
        value ={city}
        onChangeText={(text) => setCity(text)}
      />

    <TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='Type your Skin Description'
        placeholderTextColor="gray"
       className ="bg-slate-300 ml-4 pl-3 py-10"
        value ={descirption}
        onChangeText={(body) => setDescirption(body)}
      />

<TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='What is your Skin Type?'
        placeholderTextColor="gray"
       className ="bg-slate-300 py-3 ml-4 pl-3"
        value ={skinType}
        onChangeText={(body) => setSkinType(body)}
      />

<TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='What is your Concern?'
        placeholderTextColor="gray"
       className ="bg-slate-300 py-3 ml-4 pl-3"
        value ={concern}
        onChangeText={(body) => setConcern(body)}
      />

<TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='What Product?'
        placeholderTextColor="gray"
       className ="bg-slate-300 py-3 ml-4 pl-3"
        value ={product}
        onChangeText={(body) => setProduct(body)}
      />

<TextInput
     style ={{borderWidth:1, borderRadius:5}}
        placeholder='Type Product Price'
        placeholderTextColor="gray"
       className ="bg-slate-300 py-3 ml-4 pl-3"
        value ={price}
        onChangeText={(body) => setPrice(body)}
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

export default SkinForm