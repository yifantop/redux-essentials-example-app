import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import NotificationsSlice from '../features/notifications/NotificationsSlice';
import bin2DecReducer from '../features/bin2Dec/Bin2DecSlice';

export default configureStore({
  reducer: {
    // 告诉Redux我们希望根state对象内部有一个名为posts的字段，并且state.posts的所有数据都将在dispatch action时由postsReducer函数更新
    posts: postsReducer,
    users: usersReducer,
    notifications: NotificationsSlice,
    bin2Dec: bin2DecReducer,
  },
});
