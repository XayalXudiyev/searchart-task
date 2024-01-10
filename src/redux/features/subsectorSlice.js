// subsectorSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  subsectors: [],
  selectedSubsector: '',
  isLoading: false,
  error: null,
}

export const fetchSubsector = createAsyncThunk('subsector', async (selectedSector) => {
  try {
    const res = await axios.get(`https://searchartback-production-dc78.up.railway.app/api/subsectors/?sector=${selectedSector}`);
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

export const subsectorSlice = createSlice({
  name: 'subsector',
  initialState,
  reducers: {
    setSelectedSubsector: (state, action) => {
      state.selectedSubsector = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubsector.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSubsector.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subsectors = action.payload;
    });
    builder.addCase(fetchSubsector.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { setSelectedSubsector } = subsectorSlice.actions;

export default subsectorSlice.reducer;
