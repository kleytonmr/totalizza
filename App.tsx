import React from 'react';
import { View } from 'react-native';
import { Header } from './components/header';
import { Content } from './components/content';
import { styles } from './styles/app';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header />
      <Content></Content>
    </View>
  );
}