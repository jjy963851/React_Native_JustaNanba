import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity,} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { FontAwesome5 } from '@expo/vector-icons';
import { auth } from '../../firebase';

export default function NewsPaperProps(){
    const [clicked, setClicked] = useState(false);

    return(
<ScrollView
 showsVerticalScrollIndicator ={false}
 showsHorizontalScrollIndicator ={false}
 
 pagingEnabled
style= {{width: windowWidth }} 
className ="flex-1 ">
<View className ="mx-auto">
    <View className ="px-3">
    <Text className ="pt-10 text-lg font-bold">The Inkey List Finally Dropped a Sunscreen and It Was Worth the Wait</Text>
    <Text className ="pt-2 text-md font-semibold">Meet PolyGlutamic Acid Dewy Sunscreen, your skin's new Bff.</Text>

    <View className ="pt-5 flex-row justify-between">
        <Text className ="font-semibold "> @{auth.currentUser?.email}</Text>
        <Text className ="font-semibold "> Follow</Text>

    </View>
    <Text className ="pt-1 font-semibold text-lg">Brooklyn, NY, USA</Text>

    <Text className ="pt-3 leading-6">It's been five years since I first met Colette Laxtona nd Mark Curry, cofounders of the UK-based company, The Inkey List. My first encouner with the brand
        was at a breakfast where the two of them announced that the skin-care company was launching at Sephora.
        I was intriguedecause I had never heard of the brand, but the idea of every product having one main ingredient appealed to me, a skin-care minimalist. The fact that
        every product in the brand's line fell under $15 was pretty exiciting, too.
    </Text>

    <View className ="justify-between flex-row pt-5">
    <FontAwesome5 name="paperclip" size={24} color="black" />

    <TouchableOpacity onPress={() => setClicked(!clicked)}>
<View>
  {clicked ? (<Icon name="heart" size={24} color="red" />) : (<Icon name="heart-o" size={24} color="red" />)}
</View>    
</TouchableOpacity>
    </View>
    </View>
</View>

</ScrollView>

    );
}