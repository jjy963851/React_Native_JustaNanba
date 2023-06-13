import { View, Text, Image, Dimensions, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from "@react-navigation/native";


const ShopProfile = () => {
    const OpenLink = async () => {
        const url = 'https://oo35mm.com/';
    
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
              await Linking.openURL(url);
            } else {
              console.log('링크 열기를 지원하지 않습니다.');
            }
          } catch (error) {
            console.log('링크 열기에 실패했습니다.', error);
          }
        };

    


    const navigation = useNavigation()
  return (
    
    <View 
    style ={{width: windowWidth}}
    className ="flex-1 pl-5 mt-5">
      <Text className=" font-extrabold text-xl mx-auto" >Since 2009</Text>
      <Text className ="leading-5 text-md mt-3">
        oo35mm ("oh oh thirty five millimeter") has become synonymous with the lastest beauty, and skincare trends. But, what does our name really mean? You might glance at the logo and be utterly confused. It's fine. We are, too. When we first started, the idea that film could take you to places you've never been before resonated with us. We wanted to bring that experience into our store. Fr us, the "oo" in "oo35mm" symbolizes the eyes while "35mm" represents the classic 35mm film.

      </Text>
      <View className ="justify-between flex-1 flex-row mt-5">
       <View>
            <Text className ="font-semibold text-lg">Location</Text>
            <Text className ="w-4/12">81 Mott Street Frnt 2 New York, NY 10013</Text>
        </View>
        <View className ="pr-5">
            <TouchableOpacity onPress={OpenLink}>
            <Text className ="font-semibold text-lg ">Website</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

export default ShopProfile