// store.js

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/reducers';

const store = configureStore({
  reducer: rootReducer, // combineReducers ile birleştirilmiş reducer
  middleware: [thunk], // Redux-thunk middleware ekleniyor
  // İhtiyaç duyarsanız buraya başka yapılandırmaları ekleyebilirsiniz
});

export default store;
