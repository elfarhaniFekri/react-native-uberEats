import React from 'react';



export const ADD_TO_CART = 'ADD_TO_CART';




export const changeMyname = name => dispatch => {
     
    
        dispatch({
            type: ADD_TO_CART,
            payload : name
        })
            
      

}

export const changeAge = age => dispatch => {

    if(age.length > 0){
          dispatch({
              type:CHANGE_AGE,
              payload : age
          })
    }
}