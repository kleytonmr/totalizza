import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Item {
  name: string;
  price: string;
}

const data: Item[] = [
  { name: 'Arroz', price: '10.00' },
  { name: 'Feijão', price: '05.00' },
  { name: 'Macarrão', price: '04.00' },
  { name: 'Arroz', price: '10.00' },
  { name: 'Feijão', price: '05.00' },
  { name: 'Macarrão', price: '04.00' },
  { name: 'Arroz', price: '10.00' },
  { name: 'Feijão', price: '05.00' },
  { name: 'Macarrão', price: '04.00' },
  { name: 'Arroz', price: '10.00' },
  { name: 'Feijão', price: '05.00' },
  { name: 'Macarrão', price: '04.00' },
  { name: 'Arroz', price: '10.00' },
  { name: 'Feijão', price: '05.00' },
  { name: 'Macarrão', price: '04.00' },
];

const calculateTotal = (items: Item[]) => {
  return items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
};

export default function App() {
  const renderItem: ListRenderItem<Item> = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>R$ {item.price}</Text>
    </View>
  );

  const loginWithFacebook = () => {
    console.log('Button pressed');
  };

  const total = calculateTotal(data);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Totalizza</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.name}>Nome</Text>
        <Text style={styles.price}>Preço</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
      <View style={styles.totalContainer}>
      <FontAwesome.Button name="camera" backgroundColor="#3b5998" onPress={loginWithFacebook}>
        Adicionar item
      </FontAwesome.Button>
        <Text style={styles.totalText}>Total: R$ {total}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name:{
    fontWeight: 'bold',
    paddingLeft: 20,
    fontSize: 20,
  },
  price: {
    fontWeight: 'bold',
    paddingRight: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 100,
    paddingBottom: 10,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    textAlign: 'right',
    minWidth: 80, 
  },
  totalContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd'
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
});