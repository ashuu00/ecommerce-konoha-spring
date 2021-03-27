export  function userReducer(state=null,action) {
   switch(action.type){
        case "LOGGED_IN_USER":
           return action.payload;
        case "LOGOUT_USER":
            return action.payload;
        default:
            return state;
 
   } 
}

export function cartReducer(state={item:0},action){
   switch(action.type){
      case "ADD_CART":
         return Object.assign({},state,{item:state.item+1});
      default:
         return state;
   }
}

/**
 * user:{name,token}
 */

 export function categoryReducer(state=null,action){
    switch (action.type) {
       case "ALL_CATEGORY": //merging properties using assign
          return Object.assign({},state,{...action.payload});
         
    
       default:
         return state;
          
    }
 }

 export function productFormReducer(state=null,action){
    switch (action.type){
       case "PRODUCT_DETAILS":
          return Object.assign({},state,{...action.payload});
       case "GET_PRODUCT":
          const myState=Object.assign({},state);
          Object.assign({},state, null);
          return myState;
       default:
          return state;
    }
 }