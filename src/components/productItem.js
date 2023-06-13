import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

export default function ProductItem({ item, onPress }) {

  
    return(
        <>
         <TouchableOpacity style="flex-1 p-2" onPress={onPress}>
      <View style="bg-white rounded-lg shadow p-4">
        <Image style="w-full h-64" source={item.image} />
        <Text style="mt-2 text-lg font-bold">{item.title}</Text>
        <Text style="mt-1 text-gray-500">{item.price}</Text>
      </View>
    </TouchableOpacity>
        
        
        </>
    );
}