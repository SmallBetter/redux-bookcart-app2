import React, { PropTypes } from 'react'
import './assets/style.css'
import ItemBook from '../ItemBook'
import SearchBook from '../SearchBook'

const ListBook = ({ books, searchs }) => (
  <div className="div-list">
    <table>
      <tbody>
        <tr>
          <th className="th-list-isbn">
            ISBN
          </th>
          <th className="th-list-npq">
            Name
          </th>
          <th className="th-list-npq">
            Price
          </th>
          <th className="th-list-npq">
            Quantity
          </th>
          <th className="th-list-totle">
            Total Price
          </th>
          <th className="th-list-action">
            Action
          </th>
        </tr>
        {
          books
            .filter(book => book.name.includes(searchs.text))
            .map(book => <ItemBook key={book.id} {...book} />)
        }
      </tbody>
    </table>
    <div className="Search">
      <SearchBook />
    </div>
    <p className="p-list">
        Grand Total: ฿ { books.map(book => (book.totalprice)).reduce((p, i) => p + i, 0)}
    </p>
  </div>
  )
ListBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isbn: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
      totalprice: PropTypes.number.isRequired
    })
  ).isRequired,
  searchs: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
}


export default ListBook