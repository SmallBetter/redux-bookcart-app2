import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class InputBook extends Component {
  state = {
    isbn: '',
    name: '',
    price: '',
    quantity: ''
  }

  changeIsbn = event => {
    if (event.target.value.length < 8 && Number(event.target.value) > 0) {
      this.setState({
        isbn: event.target.value
      })
    }
  }

  changeName = event => {
    this.setState({
      name: event.target.value
    })
  }

  changePrice = event => {
    if (Number(event.target.value) > -1) {
      this.setState({
        price: event.target.value
      })
    }
  }

  changeQuantity = event => {
    if (Number(event.target.value) > -1) {
      this.setState({
        quantity: event.target.value
      })
    }
  }

  eventClick = () => {
    const isbn = this.state.isbn
    const name = this.state.name
    const price = this.state.price
    const quantity = this.state.quantity
    if (isbn.length && name.length && price.length && quantity.length) {
      this.props.bookAdd(isbn, name, price, quantity)
      this.setState({
        isbn: '',
        name: '',
        price: '',
        quantity: ''
      })
    }
  }

  render() {
    return (

      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <th className="th-input">
                ISBN:
              </th>
                <td className="td-input">
                  <input type="text" value={this.state.isbn} onChange={this.changeIsbn} placeholder="Number more zero" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Name:
              </th>
                <td className="td-input">
                  <input type="text" value={this.state.name} onChange={this.changeName} placeholder="Name book" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Price(In Rupee):
              </th>
                <td className="td-input">
                  <input type="text" value={this.state.price} onChange={this.changePrice} placeholder="Number more zero" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Quantity:
              </th>
                <td className="th-input">
                  <input type="text" value={this.state.quantity} onChange={this.changeQuantity} placeholder="Number more zero" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-input">
          <button onClick={this.eventClick}>Add to list</button>
        </div>
      </div>
    )
  }
}

InputBook.propTypes = {
  bookAdd: PropTypes.func.isRequired
}
export default InputBook