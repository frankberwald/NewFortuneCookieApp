import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { fortunes } from '../src/fortunes';
import { styles } from '../src/styles';
import LottieView from 'lottie-react-native';


export default function FortuneScreen () {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const numAleatorio = Math.floor(Math.random() * fortunes.length);
    setMessage(fortunes[numAleatorio])
  }, []);

  function generateNewMessage (){
    const numAleatorio = Math.floor(Math.random() * fortunes.length);
    setMessage (fortunes[numAleatorio]);
  }
  return (
    <View style={styles.container}>
        <LottieView
          autoPlay={true}
          source={require('../assets/animations/cookieAnimation.json')}
            style={{width:200, height:200}}
          />
        <Text style={styles.fortuneText}>{message}</Text>
        <TouchableOpacity style={styles.newFortune} onPress={generateNewMessage}>
          <Text style={styles.newFortuneText}>Quebrar outro</Text>
        </TouchableOpacity>
    </View>
  );
}


