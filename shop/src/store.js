import { configureStore, createSlice } from "@reduxjs/toolkit";


let shoppingBasket = [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
] 

let cartStorage = createSlice({
            name: `shoppingTitle`,
            initialState : [
                {id : 0, name : 'White and Black', count : 2},
                {id : 2, name : 'Grey Yordan', count : 1}
            ] ,
            reducers : {
                addCart(state, action){
                    let OriObj = action.payload;
                    let newObj = {id : OriObj.id, name : OriObj.title, count : 0}
                    let pushTest = state.findIndex((a)=>{return a.id === newObj.id})
                    console.log('pushTest: ', pushTest);
                    if(pushTest < 0){
                        state.push(newObj)
                    }
                    else{
                        state[pushTest].count++;
                    }
                },
                plus(state, action){
                    let num = state.findIndex((a)=>{return a.name == action.payload})
                    state[num].count++;
                    
                },
                deleteRow(state, action){
                    let num = state.findIndex((a)=>{return a.name === action.payload})
                    state.splice(num,1);
                }       
            }
        }
)

console.log('cartStorage: ', cartStorage);

let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state){
            return 'john' + state
        }
    }
})


export let {changeName} = user.actions
export let {plus, addCart, deleteRow} = cartStorage.actions

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        shoppingList : cartStorage.reducer
}})