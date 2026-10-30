import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    initialState: [],
    name: 'menuItems',
    reducers : {
        load: (_state, action) => {
            return action.payload;
        }
    }
})
export const {load} = menuSlice.actions;
export default menuSlice.reducer;