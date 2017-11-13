import { combineReducers } from 'redux';
import RepoIndex from './reducers_repoIndex';
import RepoLanguage from './reducers_repoLanguage';
import getLang from './reducers_getLanguage';
import searchTerm from './reducers_search';

const rootReducer = combineReducers({
  RepoIndex,
  RepoLanguage,
  getLang,
  searchTerm
});

export default rootReducer;
