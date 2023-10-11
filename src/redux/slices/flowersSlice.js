import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {floversService} from "../../services";


const initialState = {
    one_product: {},
    similarItem: [],
    category: [],
    all_with_paginate: {},
    products_in_basket: [],
    burger_menu: false,
    basket_open: false,
};

const getAll = createAsyncThunk(
    'flowersSlice/getAll',
    async ([page, type], thunkAPI) => {
        try {
            const {data} = await floversService.getAll(page, type)
            return data

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

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
const getSimilar = createAsyncThunk(
    'flowersSlice/getSimilar',
    async ([id, same], thunkAPI) => {
        try {
            const {data} = await floversService.getById(id, same)
            return data.data.same

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
        },
        add_product_in_basket: (state, action) => {
            state.products_in_basket = [...state.products_in_basket, ...action.payload];
        },
        delete_product_by_ids: (state, action) => {
            const { color_id, product_id } = action.payload;
            state.products_in_basket = state.products_in_basket.filter(product => !(product.color_id === color_id && product.product_id === product_id));
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
            .addCase(getSimilar.fulfilled, (state, action) => {
                state.similarItem = action.payload
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.all_with_paginate = action.payload
            })
})


const {reducer: flowerReducer, actions} = flowerSlice;

const flowerAction = {
    ...actions,
    getCategory,
    getById,
    getSimilar,
    getAll
}

export {
    flowerReducer,
    flowerAction
}