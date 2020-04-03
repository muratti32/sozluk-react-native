import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import TabBar from './src/components/bottom-tabbar'


export default function App() {
  return (


      <NavigationContainer >
          <TabBar /> 
      </NavigationContainer>
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
