import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity,} from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import { FontAwesome5 } from '@expo/vector-icons';
import { auth } from '../../firebase';

export default function NewsPaperProps1(props){
    return(
  
        <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator ={false}
        style= {{width: windowWidth}} 
        className ="flex-1">

            <View className ="mx-auto">
            <View className ="px-3">
            <Text className ="leading-6 pt-5">{props.Description}</Text>

            <Text className ="leading-6 py-5">{props.Description1}</Text>
            <Text className ="py-3 font-semibold">{props.smallTitle}</Text>
            <Text className ="leading-6 ">{props.Description2}</Text>
            </View>

            </View>




        </ScrollView>





    );

}