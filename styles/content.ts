import { StyleSheet } from "react-native";

export const stylesContent = StyleSheet.create({
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
});