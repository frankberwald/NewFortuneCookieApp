import { StackNavigationProp } from '@react-navigation/stack';

// Define a lista de parametros do nav stack
export type RootStackParamList = {
  // nenhuma das telas recebem parametros
  MainScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  CookieRegister: undefined;
  AboutScreen: undefined;
  CookieScreen: undefined;
  FortuneScreen: undefined;
  ManyCookies: undefined;
};

// define a propriedade de nav pra MainScreen
export type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainScreen'>;
