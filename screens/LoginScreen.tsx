import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, StatusBar, Alert} from 'react-native';
import { styles } from '../src/styles';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../src/types/NavType';
import { StackNavigationProp } from '@react-navigation/stack';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;



export default function LoginScreen(){

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')


const navigation = useNavigation<MainScreenNavigationProp>();


  const goToCookieScreen = () => {
    if (email === "biscoito@gmail.com" && password === '1234'){
      navigation.navigate('CookieScreen');
    } else {
      Alert.alert("Usuário não encontrado")
    }
  };

  const goToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.loginScreenContainer}>
      <StatusBar />
      <View style={styles.loginView}>
        <Text style={styles.loginScreenTitle}>Será que hoje é seu dia de sorte? Vamos descobrir!</Text>
      </View>

    <View style={styles.userCredentials}>
      <TextInput
        style={styles.credentialsInput}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        placeholderTextColor='#8E4918'
        />
      <TextInput
        style={styles.credentialsInput}
        placeholder='Password'
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholderTextColor='#8E4918'
        />

      <View style={styles.forgotView}>
      <TouchableOpacity><Text style={styles.forgotText}>Esqueceu sua senha?</Text></TouchableOpacity>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginScreenButton} onPress={goToCookieScreen}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    
      <TouchableOpacity style={styles.signUpButton} onPress={goToSignUp}  >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      </View>

    </View>

    </View> //LoginScreenContainer
  )
}