import { connect } from 'react-redux'
import ListBook from './component'

const mapStateToProps = state => ({
  books: state.books,
  searchs: state.searchs
})


export default connect(mapStateToProps)(ListBook)