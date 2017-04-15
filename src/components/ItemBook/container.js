import { connect } from 'react-redux'
import { bookDelete, bookEdit, bookSave } from '../../actions/books'
import ItemBook from './component'

const mapStateToProps = (state, props) => ({ props })
const mapDispatchToProps = { bookDelete, bookEdit, bookSave }

export default connect(mapStateToProps, mapDispatchToProps)(ItemBook)