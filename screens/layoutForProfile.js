import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native';
import Footer from '../src/components/Footer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import Profile from './MyProfile/profile';
import Product from './product';
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();
import { useState, useEffect } from 'react';
import { db } from '../config'
import { ref, onValue } from 'firebase/database';
const windowHeight = Dimensions.get('window').height;

export default function LayoutForProfile() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'SkinForms/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newPosts = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      }));

      setTodoData(newPosts);
    });

  }, []);

  return (
    <ScrollView
      pagingEnabled
      style={{ height: windowHeight }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View>
        {todoData.map((item, index) => (
          <Profile key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
