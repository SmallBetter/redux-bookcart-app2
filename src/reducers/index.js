import { combineReducers } from 'redux'
import books from './books'
import searchs from './searchs'

export const reducers = {
  books,
  searchs
}

export const rootReducers = combineReducers(reducers)
