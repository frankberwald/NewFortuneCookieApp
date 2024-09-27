import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DEB3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenContainer:{
    flex: 1,
    backgroundColor: '#FF9933',
    justifyContent: 'center',
    alignItems: 'left',
  },
  loginView: {
    flexDirection: 'column',
    alignItems:'stretch',
    justifyContent: 'center',
    padding: 30,
    marginTop: 20,
    marginBottom: 30
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  alternativeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#D26A1F',
    marginBottom: 20
  },
  loginScreenTitle:{
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold'
  },
  mainScreenSubtitle: {
    fontSize: 18,
    color: '#D26A1F'
  },
  openButton: {
    borderWidth: 1,
    margin: 50,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 10
  },
  mainScreenButtons: {
    flexDirection: 'collumn',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50
  },
  signUpButton: {
    borderWidth: 1,
    margin: 0,
    width: 410,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2691E',
    borderRadius: 10
  },
  loginButton: {
    borderWidth: 1,
    margin: 5,
    width: 180,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8B4513',
    borderRadius: 40
  },
  aboutButton: {
    borderWidth: 1,
    margin: 5,
    width: 140,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C47C4E',
    borderRadius: 40
  },
  manyCookiesButton: {
    borderWidth: 1,
    margin: 5,
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2af84',
    borderRadius: 40
  },
  buttonText: {
    fontSize:24,
    color: '#fff'
  },
  userCredentials: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F7E4B3',
    height: 'auto',
    marginTop: 10,
    padding: 10,
    borderTopEndRadius: 30,
    borderTopStartRadius:30
  },
  forgotView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 20
  },
  forgotText: {
    color: '#D2691E',
    textDecorationLine: 'underline'
  },
  credentialsInput: {
    width: 410,
    height: 60,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#D46F27',
    borderWidth: 1
  },
  loginButtonContainer: {
    gap:10
  },
  loginScreenButton: {
    borderWidth: 1,
    margin: 0,
    width: 410,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2691E',
    borderRadius: 10
  },
  newFortune: {
    borderWidth: 1,
    margin: 50,
    width: 200,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    borderRadius: 10
  },
  newFortuneText: {
    fontSize: 24,
    color: '#fff'
  },
  fortuneText: {
    fontSize: 24,
    textAlign: 'justify',
    padding: 10,
    color: '#FF4400'
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
  }
});
