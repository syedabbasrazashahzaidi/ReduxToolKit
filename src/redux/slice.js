import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    addItems: [],
    itemList:[{ id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },],
}

export const listingItems = createSlice({
    name:"items",
    initialState,
    reducers:{
        addingItems:(state, action)=>{
            state.addItems = action.payload ;
        },
        itemListing:(state, action)=>{
            state.itemList = action.payload;
        }
    }
})

export const  {
    addingItems,
    itemListing
} = listingItems.actions

export default listingItems.reducer