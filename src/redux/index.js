import { createStore, combineReducers } from 'redux';
import { articlesReducer } from './reducers/articles';
import { authReducer } from './reducers/auth';


const rootReducer = combineReducers({
  articles: articlesReducer,
  auth: authReducer
})

const store = createStore(rootReducer);

export default store;

