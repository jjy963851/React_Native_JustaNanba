import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import Navigation from './Footer';
const Header = () => {
    const navigation = useNavigation()
  return (
    <View>
      <View className="mt-10">
             <View className ="px-12 flex-row justify-between items-center">


             <TouchableOpacity >
                    <Text className ="text-base font-semibold" onPress={() => navigation.navigate('Foryou')} >
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
    </View>
  )
}

export default Header