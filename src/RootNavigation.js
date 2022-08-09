import React from 'react';

import { Provider } from 'react-redux';
import { Store } from './redux/Store'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home'
import OrderCompleted from './screens/OrderCompleted';
import RestaurantDetail from './components/restaurantDetail/RestaurantDetail'


export default function RootNavigation() {

    const Stack = createStackNavigator();

    const screenOtions = {
        headerShown : false,
    }
    return(
        <Provider store={Store} >
        <NavigationContainer>
            <Stack.Navigator initialRouteName ="Home" screenOptions= {screenOtions} >
                <Stack.Screen  name='Home' component={Home} />
                <Stack.Screen  name='RestaurantDetail' component={RestaurantDetail} />
                <Stack.Screen  name='OrderCompleted' component={OrderCompleted} />
                </Stack.Navigator>
       </NavigationContainer>
       </Provider>
      
    )
}