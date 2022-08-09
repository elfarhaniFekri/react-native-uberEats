import React from 'react';

import { View , Text , Image} from 'react-native'
import { Divider } from 'react-native-elements';




const yelpRestaurantInfo = {
    name : " Farhmoun kitchen nm",
    image : "https://phantom-elmundo.unidadeditorial.es/23e61ef3905802b5427537fb3ec6cac1/crop/0x0/1279x853/resize/473/f/webp/assets/multimedia/imagenes/2021/10/01/16331067911344.jpg",
    price : "$18.9",
    reviews :  "15.9",
    rating : 4.6,
    categories : [
        {title : "Thai"}, {title : "Comfort food "} ],
    
};
// const { name , title , image , price , reviews , rating , categories } = yelpRestaurantInfo;




export default function About (props) {
   
    const { name , title , image , price , reviews , rating , categories } = props.route.params;
    const formattedCategories = categories.map( (categ) => 
categ.title ).join(" . ");
    const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
      <RestaurantImage 
      image = {image}
      />
      <RestaurantName name={name} />
      <RestaurantDescription desc = {description}
      />
      </View>
    )
}

const RestaurantImage = (props) =>(
    <Image 
     source= {{uri : props.image}}
     style={{ width : "100%" ,height : 180}}
    />
)
const RestaurantName = ( props ) =>(
<View>
    <Text  style={{ fontSize:29, marginTop : 10 ,marginHorizontal : 15 , fontWeight : "600"}}>
     {props.name}
    </Text>
</View>
)

const RestaurantDescription = ( props ) =>(
    <View>
        <Text  style={{ fontSize:16, marginTop : 10 ,marginVertical : 15 , fontWeight : "400", marginHorizontal : 15}}>
         {props.desc}
        </Text>
    </View>
    )