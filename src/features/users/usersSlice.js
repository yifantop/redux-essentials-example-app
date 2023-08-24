import { client } from "../../api/client";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await client.get('/fakeApi/users');

  return res.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
});

export const selectAllUsers = state => state.users;

export const selectUserById = (state, userId) => state.users.find(user => user.id === userId);

export default usersSlice.reducer;