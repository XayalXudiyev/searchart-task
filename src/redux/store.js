import { configureStore } from '@reduxjs/toolkit'
import countrySlice from '../redux/features/countrySlice'
import sectorSlice from '../redux/features/sectorSlice'
import subsectorSlice from '../redux/features/subsectorSlice'
import indicatorSlice from '../redux/features/indicatorSlice'
import yearSlice from '../redux/features/yearSlice'

export const store = configureStore({
  reducer: {
    country: countrySlice,
    sector: sectorSlice,
    subsector: subsectorSlice,
    indicators: indicatorSlice,
    years: yearSlice
  },
}) 