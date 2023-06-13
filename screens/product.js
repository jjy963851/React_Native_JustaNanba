import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import Footer from '../src/components/Footer';
const windowWidth = Dimensions.get('window').width;
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';



export default function Product(Props){
    const [clicked, setClicked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    return(
        
        <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator ={false}
        style= {{width: windowWidth}} 
        className ="flex-1">
        
        <View className ="px-3">
        <Text className ="font-bold text-xl">{Props.title}</Text>
        <Text className ="font-semibold text-lg">Aveeno</Text>
        </View>
        <Image 
        style={{width: windowWidth}}
        source={Props.Image}/>

        <View className ="mt-5 flex-row justify-between px-4">
        <Text>$95.00 USD</Text>
        <TouchableOpacity onPress={() => setClicked(!clicked)}>
<View>
  {clicked ? (<Icon name="heart" size={20} color="red" />) : (<Icon name="heart-o" size={20} color="red" />)}
</View>    
</TouchableOpacity>
        </View>

        <View 
        className ="mt-3">
        <TouchableOpacity className = "flex-row justify-between px-4" onPress={() => setExpanded(!expanded)}>
        <Text className = "text-lg font-bold mr-2">Good For</Text>
        <Icon name={expanded ? 'plus' : 'minus'} size={20} />
       
      </TouchableOpacity>
            <View 
            className ={`${expanded? "hidden" : ""} pt-3 pl-3 flex-row gap-4`}>
            <Text
            style= {{borderWidth:1, borderRadius:10, width:40}} 
            className ="pl-2">
                    Info
                </Text>
                <Text
            style= {{borderWidth:1, borderRadius:10, width:40}} 
            className ="pl-2">
                    Info
                </Text>
                <Text
            style= {{borderWidth:1, borderRadius:10, width:40}} 
            className ="pl-2">
                    Info
                </Text>
                <Text
            style= {{borderWidth:1, borderRadius:10, width:40}} 
            className ="pl-2">
                    Info
                </Text>
                <Text
            style= {{borderWidth:1, borderRadius:10, width:40}} 
            className ="pl-2">
                    Info
                </Text>

            </View>

        </View>

      

        <View className ="mt-3">
        <TouchableOpacity className = "flex-row justify-between px-4" onPress={() => setExpanded1(!expanded1)}>
        <Text className = "text-lg font-bold mr-2">Details</Text>
        <Icon name={expanded1 ? 'plus' : 'minus'} size={20} />
       
      </TouchableOpacity>
      <Text
      
      className ={`${expanded1? "hidden" : " "} pl-5 mt-3`}>This is the best fucking piece of liquid gold that I’ve gotten my hands on. You can smother this elixir of youth onto your face for an instant shot of rejuvination and make those years melt away temporarily for a good 2 hours before you have to plaster this shit on here again. Would not buy.</Text>
        </View>


        <View className ="mt-3">
        <TouchableOpacity className = "flex-row justify-between px-4" onPress={() => setExpanded2(!expanded2)}>
        <Text className = "text-lg font-bold mr-2">Ingredients</Text>
        <Icon name={expanded2 ? 'plus' : 'minus'} size={20} />
       
      </TouchableOpacity>

      <Text
      className ={`${expanded2? "hidden" : " "} pl-5 mt-3 leading-6`}>
        Water/Aqua/Eau (0)
        Dicaprylyl Carbonate (1-3)
        Glycerin (0)
        Cetearyl Alcohol (1)
        Cetearyl Olivate (1)
        Sorbitan Olivate (1)
        Sclerocarya Birrea Seed Oil (1)
        Bacillus/Soybean/ Folic Acid Ferment Extract (0-1)
        Nymphaea Alba Root Extract (1)
        sh-Oligopeptide-1 (1)
        sh-Oligopeptide-2 (1)
        sh-Polypeptide-1 (1)
        sh-Polypeptide-9 (1)
        sh-Polypeptide-11 (1)
        Copper Palmitoyl Heptapeptide-14 (0-1)
        Heptapeptide-15 Palmitate (0-1)
        Palmitoyl Tetrapeptide-7 (0-2)
        Palmitoyl Tripeptide-1 (0)
        Sodium Hyaluronate Crosspolymer (0-1)
        Sodium Hyaluronate (0-1)
        Panthenol (0)
        Ahnfeltiopsis Concinna Extract (0-1)
        Ascorbyl Palmitate (0-3)
        Sodium PCA (0-1)
        PCA (0)
        Olive Glycerides (1)
        Tocopherol (0-3)
        Dipotassium Glycyrrhizate (0-1)
        Phytosteryl/Octyldodecyl Lauroyl Glutamate (1)
        Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer (0-1)
        Carbomer (0-1)
        Sodium Lactate (0-1)
        Amodimethicone (0-1)
        Caprylyl Glycol (1)
        Polysorbate 60 (0-3)
        Cetyl Palmitate (1)
        Sorbitan Palmitate (1)
        Benzyl Alcohol (5)
        Hydroxyacetophenone (0-1)
        Disodium EDTA (1-3)
        1,2-Hexanediol (1)
        Sodium Hydroxide (0-3)
        Citric Acid (2)
      </Text>
        </View>

    


        </ScrollView>
    );
}