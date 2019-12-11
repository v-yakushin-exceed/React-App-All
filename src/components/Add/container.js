import { connect } from 'react-redux'
import { addToDo } from '../../actions/PageActions'
import Add from './Add';

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (data) => dispatch(addToDo(data))
  }
}

export default connect(null, mapDispatchToProps)(Add)
