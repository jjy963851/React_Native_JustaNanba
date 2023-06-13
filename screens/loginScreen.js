import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, KeyboardAvoidingView, TextInput, TouchableOpacity, Image} from 'react-native';
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";



export default function LoginScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Registered in with:',user.email);
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
        })
        .catch(error => alert(error.message))
    }
    return(
        <KeyboardAvoidingView 
        className ="flex-1  items-center" 
        
        style ={{justifyContent:"center"}}>
            <StatusBar style='dark'/>
            <Image source={require("../assets/concealer.png")}
            className ="w-full absolute -top-5 opacity-70"
            style ={{height: 400}} />

<Image source={require("../assets/cosmetics.png")}
            className ="absolute bottom-10 left-5 opacity-50"
            style ={{height: 100, width:100 }}
             />
    
<Image source={require("../assets/lotion.png")}
            className ="w-full absolute bottom-10 right-5 opacity-50"
            style ={{height: 100, width:100}} />


            <Text 
            
            className ="font-extrabold text-4xl text-indigo-500 mb-20">Just a Nanba</Text>

             <View 
             className =" gap-3 w-2/3">


                <TextInput className="py-3 ml-4 pl-3"
                style = {{borderWidth:1, borderRadius:10, backgroundColor:"white", color:"black",}}
                placeholder="Type your Email"
                placeholderTextColor="gray"
                
                value ={email}
                onChangeText={text => setEmail(text)}
                
                
                />

                <TextInput
                className=" py-3 ml-4 pl-3 "
                style = {{borderWidth :1, borderRadius:10, backgroundColor:"white"}}
                placeholder="Type your password"
                placeholderTextColor="gray"
                value ={password }
                onChangeText={text => setPassword(text)}
                secureTextEntry
                />

                <View className ="gap-5" >
                    <TouchableOpacity className =" items-center mx-10 py-2 bg-indigo-500"
                    style ={{borderWidth:1, borderRadius:5,  borderColor: "#0782F9"}}
                   onPress={handleLogin}
                    
                    >
                        <Text className =" font-semibold text-md text-white">
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity  className =" items-center mx-10 py-2 bg-indigo-500"
                    style ={{borderWidth:1, borderRadius:5,  borderColor: "#0782F9"}}
                    onPress={(handleSignUp)}
                    
                    >
                        <Text className ="font-semibold text-md text-white">
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
               
             </View>
        </KeyboardAvoidingView>

    );
}

