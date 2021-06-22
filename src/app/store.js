//Day-2 of build (Authentication and plans profile screen)
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
