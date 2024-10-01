import { useEffect, useState } from "react"
import { Text, Alert, SafeAreaView, FlatList, StyleSheet, TouchableOpacity, Image, Platform } from "react-native"
import axios from 'axios'

interface CookieData {
  id: number;
  message: string;
  isSpecial: boolean;
  brand: string;
  prize: string;
}

export default function Home(){

  const [cookieData, setCookieData] = useState<CookieData[]>([])
  const [openedCookies, setOpenedCookies] = useState<number[]>([])

    useEffect(() => {
        axios.get('http://10.0.0.113:3000/biscoitos')
        .then((response) => {
          setCookieData(response.data)
          console.log('GOOD')
        })
        .catch(() =>{
          Alert.alert("Não foi possível obter os dados.")
        })
    }, [])

    const openCookie = (id: number) => {
      setOpenedCookies((prevOpened) => [...prevOpened, id])
    }
    return (
        <SafeAreaView style={styles.cookieContainer}>
          <FlatList
          data={cookieData}
          numColumns={3}
          columnWrapperStyle={{
            gap: 20
          }}
          contentContainerStyle={{
            padding:5,
            gap:10
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => {
            const isOpened = openedCookies.includes(item.id);
            return (
              <TouchableOpacity style={styles.item} onPress={()=> openCookie(item.id)} >
                {isOpened ? (
                  <Text style={styles.openedCookie}>{item.message}</Text>
                ): (
                  <>
                  <Text style={{ alignItems: 'flex-start' }}>#{item.id}</Text>
                  <Image
                    source={require('../assets/fortune-cookie.png')}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={styles.itemText}>
                    {
                      Platform.OS === "ios" ?
                      'Comprar Biscoito' : 'Ganhar Biscoito'
                    }
                    </Text>
                </>
              )}
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cookieContainer: {
    flex: 1,
    backgroundColor: '#F5DEB3'
  },
  item: {
    flex: 1,
    marginTop: 20,
    width:'30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 8,
    padding: 5,
    borderColor: '#d2691e',
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  itemText: {
    color: '#8b4513',
    marginTop: 10,
    fontWeight: 'bold',
  },
  openedCookie: {
    fontSize: 14,
    height: 80,
    textAlign: 'center',
    justifyContent: 'center'
  },
})




