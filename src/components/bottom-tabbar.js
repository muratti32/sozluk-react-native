import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import FavoriteView from '../Views/Favorite'
import HistoryView from '../Views/History'
import DetailView from '../Views/Details'
import Home from '../Views/SearchView'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SearchStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={DetailView} />
      </Stack.Navigator>
    )
  }

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        style:{backgroundColor:'#fff'},
        showLabel:false,
        showIcon: true,
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="favorite"
        component={FavoriteView}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={SearchStack}
        options={{
          
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconStyle} >
            <MaterialCommunityIcons name="magnify"     size={size*1.2}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="history"
        component={HistoryView}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color}  size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  iconStyle : {
    backgroundColor:"#e91e63",
    width: 80,
    height: 80,
    borderRadius:80/2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:11,borderColor:'white',
    bottom: 8,
  },
  tabStyle1:{

    
  }
});