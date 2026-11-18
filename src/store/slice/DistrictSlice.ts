import {createSlice} from "@reduxjs/toolkit";

const districtSlice = createSlice({
    initialState: [],
    name: 'district',
    reducers : {
        load: (_state, action) => {
            return action.payload;
        }
    }
})
export const {load} = districtSlice.actions;
export default districtSlice.reducer;