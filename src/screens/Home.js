import React, { useEffect, useState } from "react";
import { View , Text, SafeAreaView, ScrollView} from 'react-native'
import RestaurantItems , { localRestaurants} from '../components/RestaurantItems'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from "../components/SearchBar";
import Categories from '../components/Categories'
import { Divider } from 'react-native-elements'
import BottomTabs from "../components/BottomTabs";
import About from "../components/restaurantDetail/About";

const YELP_API_KEY ="your key";


export default function Home({navigation}) {
    const [activeTab, setActiveTab] = useState("Delivery");
    const [city , setCity ] = useState("San Francisco")
    const [restaurantData , setRestaurantData] = useState(localRestaurants);
    


    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
    
           
          };

          return fetch(yelpUrl, apiOptions)
          .then((res) => res.json())
          .then((json) =>
            setRestaurantData(
              json.businesses.filter((business) =>
                business.transactions.includes(activeTab.toLowerCase())
              )
            )
          );
    };

  
   

useEffect( () => {
    getRestaurantsFromYelp();
},[city, activeTab])
    return(
        <SafeAreaView style={{backgroundColor : '#eee', flex : 1}}>
            <View  style={{backgroundColor :'white', padding : 15 }}>
           <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
           <SearchBar cityHandler={setCity} />
           </View>
           <ScrollView showsVerticalScrollIndicator = {false}>
           <Categories />
           <RestaurantItems restaurantData= {restaurantData} navigation={navigation} />
           </ScrollView>
           <Divider width={1} />
           <BottomTabs />
        </SafeAreaView>
        
    )
}