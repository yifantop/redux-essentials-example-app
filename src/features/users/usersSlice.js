const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: '0',
    name: 'tinna jekkins'
  },
  {
    id: '1',
    name: 'kevin grant'
  },
  {
    id: '2',
    name: 'madison price'
  }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;