import {createStore} from 'redux'

//initial state
const accountDealings={
    balance:0,
    loan:0,
    loan_purpose:''
}
const accountReducer=(state=accountDealings,action)=>{
   switch(action.type){
     case 'account/deposit':
        return {...state,balance: state.balance + action.payload};
     case 'account/withdraw':   
     return{...state,balance:state.balance-action.payload};
     case 'account/requestLoan':
        if(state.loan>0){
         return state;
        }
        return{...state,balance:state.balance+ action.payload.amount,loan:state.loan+action.payload.amount,loan_purpose:action.payload.purpose};
      case 'account/payloan':
        return{...state,balance:state.balance- state.loan,loan:0 ,loan_purpose:''};
        default:
            return state;
   };
  
    

}
//console.log('The file is reached though');
  const store = createStore(accountReducer);
    

 export const deposit=(amount)=>{
  return{ type:'account/deposit',payload:amount}
};
export const withdraw=(amount)=>{
    
return{ type:'account/withdraw',payload:amount}
};
export const takeLoan=(amount,purpose)=>{
    return{ type:'account/requestLoan',payload:{amount,purpose}}
};
export const loanPayment=()=>{
    return{ type:'account/payloan'}
}

