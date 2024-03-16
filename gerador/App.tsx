import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, View } from 'react-native';

import Header from './src/components/Header/Index';
import Balance from './src/components/Balance';
import Moviments from './src/components/Moviments';
import Actions from './src/components/Actions';
import 'react-native-reanimated';
import {  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Boleto from './src/components/Boletos/Boleto';
import Carteira from './src/components/Carteiras/Carteira';
import Compras from './src/components/Compras/Compras';
import Entradas from './src/components/Entradas/Entradas.1';

const list =[
  {
    id:1,
    label: 'Boleto conta de luz',
    value: '300,00',
    date: '17/09/2023',
    type: 0 //despesas
  },
  {
    id:2,
    label: 'Pix cliente formatura',
    value: '2.300,00',
    date: '17/09/2023',
    type: 1 //receita entrada
  },
  {
    id:3,
    label: 'Salario',
    value: '18.300,00',
    date: '17/09/2023',
    type: 1 //receita entrada
  }
]

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
        
    <View style={styles.container}>
      <Header name= "Bel"/>
      
      <Balance saldo="9.245,00" gastos="-527,00"/>
      <Actions/>
      
      <Text style={styles.title}>Ultimas Movimentações</Text>

      <FlatList 
      style={styles.list} 
      data={list} 
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={ ( {item}) => <Moviments data= {item}/> }
      />
      
      <StatusBar style="auto"  />
    </View>

     
   
    </>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart:14,
    marginEnd: 14,
  }
 
});

