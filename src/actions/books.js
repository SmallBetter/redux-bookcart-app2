import TYPE from './types'

export const bookAdd = (isbn, name, price, quantity) => ({
  type: TYPE.BOOK.ADD,
  payload: { isbn, name, price, quantity }
})

export const bookDelete = id => ({
  type: TYPE.BOOK.DELETE,
  payload: { id }
})

export const bookEdit = id => ({
  type: TYPE.BOOK.EDIT,
  payload: { id }
})

export const bookSave = ({ id, name, price, quantity }) => ({
  type: TYPE.BOOK.SAVE,
  payload: { id, name, price, quantity }
})

export const bookSearch = text => ({
  type: TYPE.BOOK.SEACH,
  payload: { text }
})