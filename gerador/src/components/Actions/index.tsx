import React from 'react';
import { View , Text , StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Boleto from '../Boletos/Boleto';
import Carteira from '../Carteiras/Carteira';
import Compras from '../Compras/Compras';
import Entradas from '../Entradas/Entradas.1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaPrincipal">
        <Stack.Screen name= "Entradas" component={Entradas} />
        <Stack.Screen name= "Compras" component={Compras} />
        <Stack.Screen name= "Carteira" component={Carteira} />
        <Stack.Screen name= "Boleto" component={Boleto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  };




export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name="addfolder" size={26} color="#000" />
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='tagso' size={26} color="#000" /> 
          </View>
          <Text style={styles.labelButton}>Compras</Text>

      </TouchableOpacity>


      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='creditcard' size={26} color="#000" /> 
          </View>
          <Text style={styles.labelButton}>Carteira</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='barcode' size={26} color="#000" /> 
          </View>
          <Text style={styles.labelButton}>Boleto</Text>

      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButton}>
          <AntDesign name='setting' size={26} color="#000" /> 
          </View>
          <Text style={styles.labelButton}>Conta</Text>

      </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    maxHeight: 84,
    marginBottom:14,
    marginTop: 18,
    paddingEnd:14,
    paddingStart:14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#ecf0f0',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelButton: {
    marginTop:4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

const TelaPrincipal = () => {
  const navigation = useNavigation();

  return (
    <View  />
    
  );
};

