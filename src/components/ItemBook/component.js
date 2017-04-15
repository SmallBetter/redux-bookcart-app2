import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class ItemBook extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity
  }


  eventSave = () => {
    const { name, price, quantity } = { ...this.state }
    if (name.length > 0 &&
      price > 0 &&
      quantity > 0) { this.props.bookSave({ ...this.state }) }
    this.setState({
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity
    })
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

  render() {
    return (
      <tr>
        <td className="td-item">
          { this.props.isbn }
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ this.props.name }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={this.state.name} onChange={this.changeName}
          />
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ `฿${+this.props.price}` }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={+this.state.price} onChange={this.changePrice} readOnly={false}
          />
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ +this.props.quantity }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={+this.state.quantity} onChange={this.changeQuantity} readOnly={false}
          />
        </td>
        <td className="td-item">
          { `฿ ${this.props.totalprice}` }
        </td>
        <td className="td-item">
          <button className={!this.props.editData ? 'viewStyle' : 'editStyle'} onClick={() => this.props.bookEdit(this.props.id)}>Edit</button>
          <button className={this.props.editData ? 'viewStyle' : 'editStyle'} onClick={this.eventSave}>Save</button>
          <button onClick={() => this.props.bookDelete(this.props.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

ItemBook.propTypes = {
  id: PropTypes.number,
  isbn: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  totalprice: PropTypes.number,
  editData: PropTypes.bool,
  bookDelete: PropTypes.func.isRequired,
  bookSave: PropTypes.func.isRequired,
  bookEdit: PropTypes.func.isRequired
}
ItemBook.defaultProps = {
  id: 1,
  isbn: '1',
  name: 'text 1',
  price: '100',
  quantity: '2',
  totalprice: 200,
  editData: false
}

export default ItemBook