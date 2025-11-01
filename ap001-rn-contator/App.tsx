import { Button, StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'

//16.8: hook é uma função. useState

export default function App() {
  const [numero, setNumero] = useState (0) 
  return (
    <View style={styles.container}>
      <Text>{numero}</Text>
      <Button title='OK' onPress={() => setNumero(numero + 1)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
