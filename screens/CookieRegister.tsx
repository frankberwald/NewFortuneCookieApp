import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, View, Switch, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker'


export default function CookieRegister(){
  const [isEnabled, setIsEnabled] = useState(false);
  const [message, setMessage] = useState('');
  const [brand, setBrand] = useState<String>('Marca');
  const [prizeValue, setPrizeValue] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar/>
      <View style={styles.flexContainer}>

        <Text style={styles.titleText}> Mensagem do Biscoito</Text>
        <TextInput
        style={styles.cookieInput}
        placeholder='Digite a mensagem'
        // value={message}
        // onChangeText={setMessage}
        placeholderTextColor='#8E4918'
        />
        <View style={styles.switchView}>
          <Text style={styles.titleText}>Biscoito Especial?</Text>
          <Switch
          style={styles.cookieSwitch}
          trackColor={{false: '#767577', true: '#D2691E'}}
          thumbColor={isEnabled ? '#D2691E' : 'f4f3f4'}
          value={isEnabled}
          onValueChange={setIsEnabled}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Picker
          style={{backgroundColor: '#fff'}}
            selectedValue={setBrand}
            onValueChange={(brandName) => setBrand(brandName)}
            >
            <Picker.Item value="Doritos" label="Doritos"/>
            <Picker.Item value="Fandangos" label="Fandangos"/>
            <Picker.Item value="Cebolitos" label="Cebolitos"/>
            </Picker>
        </View>
       

        <Text style={styles.titleText}>Valor do Prêmio</Text>
        <TextInput
        style={styles.cookieInput}
        placeholder='Digite o valor do prêmio'
        // value={prizeValue}
        // onChangeText={setPrizeValue}
        placeholderTextColor='#8E4918'
        />

        <TouchableOpacity style={styles.registerButton}><Text style={styles.registerText}>Adicionar Biscoito</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7E4B3',
    alignItems: 'center',
    padding: 20
},
  flexContainer: {
    margin: 30,
    gap: 15
  },
  cookieInput: {
    width: 410,
    height: 60,
    borderColor: '#D36D23',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#D36D23',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    color: '#8E4918'
  },
  switchView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cookieSwitch: {
    marginLeft: 10
  },
  titleText: {
    fontSize:20,
    color: '#D36D23'
  },
  registerButton: {
    alignItems: 'center',
    width: 410,
    height: 55,
    backgroundColor: '#D2691E',
    borderRadius: 10,
    justifyContent: 'center'
  },
  registerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  }
});