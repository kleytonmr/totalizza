import { StyleSheet } from "react-native";

export const stylesHeader = StyleSheet.create({
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
  });