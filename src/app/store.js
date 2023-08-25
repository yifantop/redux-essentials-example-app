import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersSlice from '../features/users/usersSlice';
import NotificationsSlice from '../features/notifications/NotificationsSlice';


export default configureStore({
  reducer: {
    // 告诉Redux我们希望根state对象内部有一个名为posts的字段，并且state.posts的所有数据都将在dispatch action时由postsReducer函数更新
    posts: postsReducer,
    users: usersSlice,
    notifications: NotificationsSlice
  },
})
