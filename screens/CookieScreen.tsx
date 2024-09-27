import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { styles }  from '../src/styles';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { MainScreenNavigationProp } from '../src/types/NavType';

export default function CookieScreen() {
  const navigation = useNavigation<MainScreenNavigationProp>();

  function abrirBiscoito (){
    navigation.navigate('FortuneScreen');
  }

  return  (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Quebre seu biscoito!</Text>
      <LottieView
          autoPlay={true}
          source={require('../assets/animations/openedCookieAnimation.json')}
            style={{width:200, height:200}}
          />
      <TouchableOpacity style={styles.openButton} onPress ={abrirBiscoito}>
        <Text style={styles.buttonText}>Quebrar</Text>
      </TouchableOpacity>

    </View>
  );
}