import { connect } from 'react-redux'
import { setCheckId, delElem, editToDo } from '../../actions/PageActions'
import ToDo from './ToDo';


const mapDispatchToProps = dispatch => {
  return {
    setCheckId: (id, status) => dispatch(setCheckId(id, status)),
    delElem: (id) => dispatch(delElem(id)),
    editToDo: (id, currentText) => dispatch(editToDo(id, currentText))
  }
}

export default connect(null, mapDispatchToProps)(ToDo)