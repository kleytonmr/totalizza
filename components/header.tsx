import { View, Text } from "react-native"
import { stylesHeader } from "../styles/header"

export const Header = () => {
    return (
    <>
      <View>
          <Text style={stylesHeader.title}>Totalizza</Text>
      </View>
      <View style={stylesHeader.header}>
          <Text style={stylesHeader.name}>Nome</Text>
          <Text style={stylesHeader.price}>Preço</Text>
      </View>
    </>
    )
}