import React from 'react';
import { View , Text , Image, StyleSheet, ScrollView} from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox  from 'react-native-bouncy-checkbox';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
menuItemStyle : {
    flexDirection : "row",
    justifyContent : "space-between",
    margin : 20
},
titleStyle :{
    fontSize : 20,
    fontWeight : "600"
}
});

export default function MenuItems ({ restaurantName,
    foods}) {
    

        const dispatch = useDispatch();

        const selectItem = (item, checkboxValue) =>
        dispatch({
          type: "ADD_TO_CART",
          payload: {
            ...item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue,
          },
        });

        const cartItems = useSelector(
            (state) => state.cartReducers.selectedItems.items
          );
        
          const isFoodInCart = (food, cartItems) =>
            Boolean(cartItems.find((item) => item.title === food.title));




    return (
    
<ScrollView showsVerticalScrollIndicator={false}>
{console.log(foods)}
{foods.map((foodx, index) => (
<View key={index}>

<View style={styles.menuItemStyle}>
    <BouncyCheckbox  
    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
    fillColor="green" 
    isChecked={isFoodInCart(foodx, cartItems)}
    onPress={(checkboxValue) => selectItem(foodx, checkboxValue)}
    
    />
    <FoodInfo  food={foodx} />
    <FoodImage food={foodx} />
  </View>
  <Divider width={0.5} orientation="vertical" style={{ marginHorizontal : 10}}/>
</View>

    )
)}
    </ScrollView>
    );
}





    const FoodInfo = (props) => {
      return(
           <View style={{ width : 240, justifyContent: 'space-evenly'}} >
           <Text style={styles.titleStyle}>{props.food.title}</Text>
           <Text>{props.food.description}</Text>
           <Text>{props.food.price}</Text>
       </View>);
    }

    const FoodImage = ( props ) => {
        return(
            <View>
   <Image 
   source={{uri : props.food.image}}  style = {{width : 100, height : 100 , borderRadius : 15}} />
   </View>
        );
    }