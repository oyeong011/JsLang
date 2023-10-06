import { configureStore, createSlice } from "@reduxjs/toolkit";


let shoppingBasket = [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
] 

let cartStorage = shoppingBasket.map((a, i)=>{
    const slice = createSlice({
            name: `shoppingTitle${i}`,
            initialState: {...a}
        }
    )
    return slice.reducer
})



let user = createSlice({
    name : 'user',
    initialState : 'kim'
})
console.log('user: ', user);


let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        shoppingList : (state = {}, action) => {
            // 각 쇼핑 바스켓 reducer를 조합하려면 combineReducers 또는 직접 조합해야 합니다.
            let nextState = state;
            cartStorage.forEach((cartReducer, index) => {
              nextState[`cart${index}`] = cartReducer(nextState[`cart${index}`], action);
            });
            return nextState;
    }
}})