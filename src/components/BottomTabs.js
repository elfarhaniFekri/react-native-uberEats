import React from 'react';
import { View , Text, TouchableOpacity } from 'react-native'
import FontAwesome5  from 'react-native-vector-icons/FontAwesome5'
export default function BottomTabs() {
    return (
        <View style={{flexDirection : "row",
         margin : 10 , 
         marginHorizontal : 10 , 
         justifyContent : 'space-between'}}>
       <Icon icon="home" text="home" />
       <Icon icon="search" text="   Browse" />
       <Icon icon="shopping-bag" text="Grocery" />
       <Icon icon="receipt" text="Orders" />
       <Icon icon="user" text="account" />
        </View>
    )
}

const Icon = props  => (
    <TouchableOpacity>
    <View>
    <FontAwesome5 name ={props.icon} size={23} 
    style={{alignSelf : "center", marginBottom : 3}}  />
    <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
)