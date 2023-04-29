const {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
} = require("redux");
const { default: thunk } = require("redux-thunk");
const rootReducer = {
    
};
export const store = legacy_createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
