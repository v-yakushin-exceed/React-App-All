import React from 'react'
import PropTypes from 'prop-types'

class ToDo extends React.Component {

  state = {
    currentText: this.props.data.text,
    isReadOnly: true
  }

  handleChange = (e) => {
    const { currentText, value } = e.currentTarget
    this.setState({ [currentText]: value })
  }
  validate = () => {
    const { currentText } = this.state
    if (currentText.trim()) {
      return true
    }
    return false
  }

  handleCheckboxChange = (e) => {
    this.props.onCheckBox(this.props.data._id, this.props.data.status)
  }
  clickFunction = (e) => {
    this.props.onDeleteToDo(this.props.data._id)
  }

  onDoubleClick = (e) => {
    console.log('DOUBLE CLICK')
    this.setState({ isReadOnly: !this.state.isReadOnly })
  }

  handleEdit = (e) => {
    this.setState({ currentText: e.currentTarget.value })
  }

  handleBlur = (event) => {
    if (event.key === 'Enter') {
      const { currentText } = this.state
      this.props.onEditToDo(this.props.data._id, currentText);
      this.setState({ text: currentText, isReadOnly: true })
    }
  }

  render() {
    const { isReadOnly, currentText } = this.state
    const { status } = this.props.data
    const check = this.props.data.status
    return (
      <React.Fragment>
        <div className="list__items" >
          <input type="checkbox" id="check" checked={status} onChange={this.handleCheckboxChange} />
          <label forhtml="check" className="check-box"></label>
          <input value={currentText} onKeyPress={this.handleBlur} readOnly={isReadOnly} onBlur={() => this.setState({ isReadOnly: true })} onChange={this.handleEdit} className={`list__text ${check ? 'active' : ''}`} onDoubleClick={this.onDoubleClick} />
          <button onClick={this.clickFunction}></button>
        </div>
      </React.Fragment>
    )
  }
}

ToDo.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export { ToDo } 