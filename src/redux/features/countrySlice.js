import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    countries: [], 
    selectedCountries:[],
    isLoading: false, 
    error: null,
}

export const fetchCountry = createAsyncThunk('country', async () => {
    try {
        const res = await axios.get("https://searchartback-production-dc78.up.railway.app/api/country/?indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars");
      
        return res.data;
    } catch (err) {
        console.error(err); 
        throw err;
    }
});

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setSelectedCountries: (state, action) => {
            state.selectedCountries = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountry.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCountry.fulfilled, (state, action) => {
            state.isLoading = false
            state.countries = action.payload
        })
        builder.addCase(fetchCountry.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export const { setSelectedCountries } = countrySlice.actions; 

export default countrySlice.reducer