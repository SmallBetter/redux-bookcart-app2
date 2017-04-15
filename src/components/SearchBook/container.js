import { connect } from 'react-redux'
import SearchTodo from './component'
import { bookSearch } from '../../actions/books'

const mapDispatchToProps = { bookSearch }


export default connect(null, mapDispatchToProps)(SearchTodo)