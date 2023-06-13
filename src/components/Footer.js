import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Layout from '../../screens/layout';
import { useNavigation } from "@react-navigation/native";
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function Footer(){
  const navigation = useNavigation()
    return(
    
        <View style={styles.container}>
          <TouchableOpacity>
        <Text style={styles.tab}><FontAwesome name="home" size={30} color="black" onPress={() => navigation.navigate("Home")} /></Text>
        </TouchableOpacity>
        <Text style={styles.tab}><Feather name="search" size={30} color="black" /></Text>
        <TouchableOpacity>
        <Text style={styles.tab}><MaterialIcons name="add-box" size={30} color="black"  onPress={() => navigation.navigate("Foryou")} /></Text>
        </TouchableOpacity>
        <Text style={styles.tab}><MaterialIcons  name="favorite" size={30} color="black"  onPress={() => navigation.navigate("MyShelf")}/></Text>
        
        <TouchableOpacity>
        <Text style={styles.tab}><MaterialIcons name="person" size={30} color="black"  onPress={() => navigation.navigate("Fetch")} /></Text>
        </TouchableOpacity>

      </View>
     

    
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 60,
      
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    tab: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });