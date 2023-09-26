import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    products_in_basket: [],
    burger_menu: false,
    basket_open: false,
};

const flowerSlice = createSlice({
    name: 'flowerSlice',
    initialState,
    reducers: {
        open_menu: (state) => {
            state.burger_menu = !state.burger_menu
        },
        open_basket: (state) => {
            state.basket_open = !state.basket_open
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