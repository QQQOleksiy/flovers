import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    burger_menu: false,
};

const flowerSlice = createSlice({
    name: 'flowerSlice',
    initialState,
    reducers: {
        open_menu: (state) => {
            state.burger_menu = !state.burger_menu
        }
    },
    extraReducers:{}
})


const {reducer: flowerReducer, actions} = flowerSlice;

const flowerAction = {
    ...actions
}

export {
    flowerReducer,
    flowerAction
}