import React, { PropTypes } from 'react'
import './assets/style.css'

const SearchBook = ({ bookSearch }) => (
  <input className="Sea" type="text" placeholder="Search" onChange={event => bookSearch(event.target.value)} />
  )

SearchBook.propTypes = {
  bookSearch: PropTypes.func.isRequired
}

export default SearchBook