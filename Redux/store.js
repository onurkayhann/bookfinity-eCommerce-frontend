import { configurateStore, combineReducers, applyMiddleWare } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const reducers = combineReducers({
  // cartReducer
});

const store = configurateStore(
  reducers,
  composeWithDevTools(applyMiddleWare(thunkMiddleware))
);

export default store;