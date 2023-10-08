import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {floversService} from "../../services";


const initialState = {
    one_product: {},
    category: [],
    products_in_basket: [],
    burger_menu: false,
    basket_open: false,
};

const getCategory = createAsyncThunk(
    'flowersSlice/getCategory',
    async (_, thunkAPI) => {
        try {
            const {data} = await floversService.getCategory()
            return data.data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getById = createAsyncThunk(
    'flowersSlice/getById',
    async (id, thunkAPI) => {
        try {
            const {data} = await floversService.getById(id)
            return data.data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

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
    extraReducers: builder =>
        builder
            .addCase(getCategory.fulfilled, (state, action) => {
                state.category = action.payload
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.one_product = action.payload
            })
})


const {reducer: flowerReducer, actions} = flowerSlice;

const flowerAction = {
    ...actions,
    getCategory,
    getById
}

export {
    flowerReducer,
    flowerAction
}