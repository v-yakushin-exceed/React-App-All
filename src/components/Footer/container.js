import { connect } from 'react-redux'
import { delAll, setMode } from '../../actions/PageActions'
import Footer from './Footer';

const mapStateToProps = store => {
  return {
    mode: store.AppReducer.mode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delAll: () => dispatch(delAll()),
    setMode: (name) => dispatch(setMode(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)