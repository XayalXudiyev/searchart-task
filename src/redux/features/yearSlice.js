import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    years: [],
    // selectedYears: null,

    isLoading: false,
    error: null
}

export const fetchYears = createAsyncThunk('year', async () => {
    try {
        const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/years/?countries=Afghanistan%3BAlbania%3BAlgeria%3BAndorra%3BAngola%3BAntigua%20and%20Barbuda%3BArgentina&indicator=Gross%20Domestic%20Product%20billions%20of%20U.S.%20dollars`)
        return res.data
    } catch (error) {
        console.error(err)
        throw err
    }
})

export const yearSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        handleFirstYearChange: (state, action) => {
            state.selectedCountries = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchYears.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchYears.fulfilled, (state, action) => {
            state.isLoading = false
            state.years = action.payload
        });
        builder.addCase(fetchYears.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        });
    }
});

export default yearSlice.reducer







