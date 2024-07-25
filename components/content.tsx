import { ListRenderItem, View, Text, FlatList } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { dataApp } from '../constants/app-constants';
import { Item } from '../app.interfaces';
import { stylesContent } from "../styles/content";

const total = (items: Item[]) => {
  return items.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
};

const renderItem: ListRenderItem<Item> = ({ item }) => (
  <View style={stylesContent.item}>
    <Text style={stylesContent.itemName}>{item.name}</Text>
    <Text style={stylesContent.itemPrice}>R$ {item.price}</Text>
  </View>
);

const capturePhoto = () => {
  console.log('Button pressed');
};

export const Content = () => {
  return (
  <>
    <FlatList
      data={dataApp}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    <View style={stylesContent.totalContainer}>

    <FontAwesome.Button name="camera" backgroundColor="#3b5998" onPress={capturePhoto}>
      Adicionar item
    </FontAwesome.Button>
      <Text style={stylesContent.totalText}>Total: R$ {total(dataApp)}</Text>
    </View>
  </>
  )
}