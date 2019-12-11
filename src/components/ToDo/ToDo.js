import React from 'react'
import PropTypes from 'prop-types'

class ToDo extends React.Component {

  state = {
    currentText: this.props.data.text,
    isReadOnly: true,
  }

  handleCheckboxChange = () => {
    const { _id, status } = this.props.data;
    this.props.setCheckId(_id, !status)
    this.props.onCheckBox(!status)
  }
  clickFunction = () => {
    this.props.onDeleteToDo(this.props.data._id)
    this.props.delElem(this.props.data._id)
  }

  onDoubleClick = () => {
    this.setState({ isReadOnly: !this.state.isReadOnly })

  }

  handleEdit = (e) => {
    this.setState({ currentText: e.currentTarget.value })
  }

  handleBlur = (event) => {
    if (event.key === 'Enter') {
      const { currentText } = this.state
      this.setState({ text: currentText.trim(), isReadOnly: true })
      console.log("DBCLICK", currentText, this.props.data._id)
     // this.props.onEditToDo(this.props.data._id, currentText.trim());
      this.props.editToDo(this.props.data._id, currentText);
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

export default ToDo 