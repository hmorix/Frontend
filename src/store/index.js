// frontend/src/store/index.js

import { configureStore } from '@reduxjs/toolkit';
import designSystemReducer from './designSystemSlice';
import componentTreeReducer from './componentTreeSlice';
import apiReducer from './apiSlice';

const store = configureStore({
  reducer: {
    design_system: designSystemReducer,
    component_tree: componentTreeReducer,
    api: apiReducer,
  },
});

export default store;