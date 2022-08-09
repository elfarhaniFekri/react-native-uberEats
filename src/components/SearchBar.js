import React  from "react";
import { View , Text, SafeAreaView} from 'react-native';

import { GooglePlacesAutocomplete  } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function SearchBar({cityHandler}) {
   
    return(
       
            <View style={{marginTop : 15, flexDirection : 'row'}}>
           <GooglePlacesAutocomplete 
           query={{ key : "your key"}}
           onPress={(data , details = null) => {
              const city = data.description.split(',')[0];
              cityHandler(city);
           }}


           placeholder = "Search"
           styles={{
               textInput :{
                    backgroundColor : '#eee',
                    borderRadius : 15,
                    fontWeight : "700",
                    marginTop : 7

               },
               textInputContainer : {
                   backgroundColor : '#eee',
                   flexDirection : "row",
                   alignItems : 'center',
                   marginRight : 10,
                   borderRadius : 50
               }
           }}
           renderLeftButton={() => (
            <View style={{ marginLeft: 10 }}>
              <Ionicons name="location-sharp" size={24} />
            </View>
          )}

renderRightButton = {() => 
<View
style= {{flexDirection : "row", marginRight: 8 ,
padding : 9 , borderRadius: 30 , alignItems : 'center', backgroundColor : '#fff'}}>
  <AntDesign name="clockcircle"  size={11} style={{marginRight : 6}}/>
  <Text>search</Text>
</View>}
           />
           </View>
       
    )
}