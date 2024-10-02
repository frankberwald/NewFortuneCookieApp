import { Text, View, TouchableOpacity, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../src/styles';
import LottieView from 'lottie-react-native';
import { RootStackParamList } from '../src/types/NavType';
import { StackNavigationProp } from '@react-navigation/stack';

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;

export default function MainScreen(){

  const navigation = useNavigation<MainScreenNavigationProp>();

  const goToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  const goToAbout = () => {
    navigation.navigate('AboutScreen');
  };

  const goToMany = () => {
    navigation.navigate('ManyCookies');
  }

  const goToRegister = () => {
    navigation.navigate('CookieRegister');
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <LottieView
          autoPlay={true}
          source={require('../assets/animations/mainScreenCookie.json')}
            style={{width:200, height:200}}
          />
      <Text style={styles.alternativeTitle}>Biscoito da Sorte</Text>
      <Text style={styles.mainScreenSubtitle}>Porque nada tão sábio como um biscoito te dando conselhos de vida.</Text>


    <View style={styles.mainScreenButtons}>
      <TouchableOpacity style={styles.loginButton} onPress={goToLogin}>
        <Text style={styles.buttonText}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.aboutButton} onPress={goToAbout}>
        <Text style={styles.buttonText}>Sobre</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.manyCookiesButton} onPress={goToMany}>
        <Text style={styles.buttonText}>Biscoitos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.manyCookiesButton} onPress={goToRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>

    </View>
  )
}