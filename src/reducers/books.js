import { initialStore } from '../store'
import TYPE from '../actions/types'

const createNewBooks = (books, isbn, name, price, quantity) => ({
  id: books.length ? books[books.length - 1].id + 1 : 1,
  isbn,
  name,
  price,
  quantity,
  totalprice: price * quantity,
  editDate: false
})

export default (books = initialStore.books, action) => {
  switch (action.type) {
    case TYPE.BOOK.ADD: {
      return [...books, createNewBooks(books, action.payload.isbn, action.payload.name, action.payload.price, action.payload.quantity)]
    }
    case TYPE.BOOK.DELETE: {
      return books.filter(record => record.id !== action.payload.id)
    }
    case TYPE.BOOK.EDIT: {
      return books.map(book => book.id !== action.payload.id ? book : { ...book, editData: !book.editData })
    }
    case TYPE.BOOK.SAVE: {
      return books.map(book => book.id === action.payload.id ?
      {
        ...book,
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
        totalprice: action.payload.price * action.payload.quantity,
        editData: false
      } : book)
    }

    default: {
      return books
    }
  }
}