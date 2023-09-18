import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { FIREBASE_AUTH } from '../../config/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { LinearGradient } from 'expo-linear-gradient';

import { Button } from 'native-base'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const signIn = async() => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email,password)
            console.log(response);
            alert('WELCOME!')
        } catch (error: any) {
            console.log(error);
            alert('Sign In failed' + error.message)
        }finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true)
        try {
            const response = await createUserWithEmailAndPassword(auth, email,password)
            console.log(response);
            alert('Check your emails!')
        } catch (error: any) {
            console.log(error);
            alert('Registration In failed' + error.message)
        }finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Password' autoCapitalize='none' onChangeText={(text) => setPassword(text)}></TextInput>
                { loading ? <ActivityIndicator size="large" color="#0000ff" /> : 
                <>
                    <TouchableOpacity style={styles.containerButton} >
                        <LinearGradient
                            // Button Linear Gradient
                            colors={['#FFB677', '#FF3CBD']}
                            start={{x: 0, y: 0}}
                            end={{x:1, y: 1}}
                            style={styles.buttonLogin}
                        >
                            <Text style={styles.textButton} onPress={signIn}>LOGIN</Text>
                        </LinearGradient>
                    
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.containerButton} >
                    <LinearGradient
                            // Button Linear Gradient
                            colors={['#FFB677', '#FF3CBD']}
                            start={{x: 0, y: 0}}
                            end={{x:1, y: 1}}
                            style={styles.buttonSignUp}
                        >
                            <Text style={styles.textButton} onPress={signUp}>CREATE ACCOUNT</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                   
                    
                </>}
        </KeyboardAvoidingView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 25, 
        padding: 10,
        backgroundColor: '#fff'
    },
        mainContainer: {
          flex: 1,
          backgroundColor: '#f1f1f1',
          alignItems: 'center',
          justifyContent: 'center'
        },
        titulo: {
          fontSize: 60,
          color: '#34434D',
          fontWeight: 'bold'
        },
        subTitle: {
          fontSize: 20,
          color: 'gray',
        },
        textInput: {
          borderWidth: 1,
          paddingStart: 30,
          borderColor: 'gray',
          padding: 10,
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 30,
          backgroundColor: '#fff'
        },
        fotgotPassword: {
          fontSize: 14,
          color: 'gray',
          marginTop: 20
        },
        containerButton: {
           
            flex: 1,
            alignItems: 'center',
      },
      textButton: {
          fontSize: 14,
          color: '#fff',
          fontWeight: 'bold',
        },
      buttonLogin: {
         width: '90%',
         height: 50,
         borderRadius: 25,
         padding: 10,
         alignItems: 'center',
         justifyContent: 'center',
         marginTop: 20
      },
      buttonSignUp: {
        width: '90%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
      }
        
      });
      