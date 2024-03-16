const initialState={
    items:[],
    TotalAmt:0,
    TotalItems:0
}
  const cartReducer=(state=initialState,action)=>{

    switch (action.type) {
        case 'cart/add-to-cart':
            const existingIndex=state.items.findIndex(item=>item.id===action.payload.id);
            if(existingIndex>=0){
              const updatedItems=state.items.map((item,index)=>{
                if(index===existingIndex) {
                    return {
                        ...item,
                         quantity:item.quantity*1 + action.payload.quantity*1,
                    }
                }
                return item;
              }); 
              return{
                ...state,
                items:updatedItems,
                TotalAmt:state.TotalAmt+action.payload.quantity*action.payload.price,
                TotalItems:state.TotalItems
              }
            }else
            return{
                ...state,
                items:[...state.items,action.payload],
                TotalAmt:state.TotalAmt+ action.payload.quantity*action.payload.price,
                TotalItems:state.TotalItems+1
            }
         case 'cart/remove-item':
            const remItems=state.items.filter(item=>item.id!==action.payload.id);
            return{
                ...state,
                items:remItems,
                TotalAmt:state.TotalAmt-action.payload.quantity*action.payload.price,
                TotalItems:state.TotalItems-1,
            }
            case 'cart/reset':
                return initialState;
        default:
            return state;
            
    }

}
export default cartReducer;

export const addToCart=(item)=>{
    return{
        type:'cart/add-to-cart',
        payload:item
    }
};

export const removeFromCart=(item)=>{
    return{
        type:'cart/remove-item',
        payload:item
    }
}
export const resetCart=()=>{
    return {type:'cart/reset'}
}