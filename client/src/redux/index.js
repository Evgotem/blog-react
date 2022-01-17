import { createStore, combineReducers } from 'redux';
import { articlesReducer } from './reducers/articles';


const rootReducer = combineReducers({
  articles: articlesReducer
})

const store = createStore(rootReducer);

export default store;

