import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const res = await client.get('/fakeApi/posts');

  return res.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  const res = await client.post(`/fakeApi/posts`, initialPost);
  
  return res.data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postUpdated: {
      reducer(state, action) {
        const { id, title, content } = action.payload;
        const existngPost = state.posts.find(post => post.id === id);
        if (existngPost) {
          existngPost.title = title;
          existngPost.content = content;
        }
      },
      prepare(id, title, content) {
        return {
          payload: {
            id,
            title,
            content
          }
        };
      }
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existngPost = state.posts.find(post => post.id === postId);
      if (existngPost) {
        existngPost.reactions[reaction]++
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
  }
});

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

export const selectAllPosts = state => state.posts.posts;

export const selectpostById = (state, postId) => {
  return state.posts.posts.find(post => post.id === postId);
}
