import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  indicators: [],
  isLoading: false,
  error: null,
};

export const fetchIndicators = createAsyncThunk('indicator', async (selectedSubsector) => {
  try {
    const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/indicators/?subsector=${selectedSubsector}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

export const indicatorSlice = createSlice({
  name: 'indicator',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIndicators.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchIndicators.fulfilled, (state, action) => {
      state.isLoading = false;
      state.indicators = action.payload;
    });
    builder.addCase(fetchIndicators.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default indicatorSlice.reducer;
