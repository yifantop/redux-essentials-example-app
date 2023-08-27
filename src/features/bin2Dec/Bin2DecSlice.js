import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  binStr: '',
};

const Bin2DecSlice = createSlice({
  name: 'bin2dec',
  initialState,
  reducers: {},
});

export const selectBinStr = (state) => state.bin2Dec.binStr;
export default Bin2DecSlice.reducer;
