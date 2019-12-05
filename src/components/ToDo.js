import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types

class ToDo extends React.Component {

  state = {
    currentText: this.props.data.text,
    isReadOnly: true
  }


  handleCheckboxChange = (e) => {
    // axios.put(`http://localhost:1234/products/update/${this.props.data._id}`)
    //     .then(res => {
    //     console.log("Update", res); 
    //   })
    this.props.onCheckBox(this.props.data._id, this.props.data.status)
  }
  clickFunction = (e) => {
    this.props.onDeleteToDo(this.props.data._id)
  }
  // onDoubleClick = (e) => {
  //   this.props.onEditToDo(this.props.data._id)
  //   console.log(this.props.data.text)
  // }

  onDoubleClick = (e) => {
    console.log('DOUBLE CLICK')
    this.setState({ isReadOnly: !this.state.isReadOnly })
  }

  handleEdit = (e) => {
    this.setState({ currentText: e.currentTarget.value })
  }

  handleBlur = (event) => {
    //save here new text
    if (event.key === 'Enter') {
      console.log("Click")
      const { currentText } = this.state
      this.props.onEditToDo( this.props.data._id, currentText);
      this.setState({ text: currentText, isReadOnly: true})
    }
  } 

  render() {
    const { isReadOnly, currentText } = this.state
    const { status } = this.props.data
    const check = this.props.data.status
    return (
      <React.Fragment>
        <div className="list__items" >

          <input type="checkbox" id="checkbox" checked={status} onChange={this.handleCheckboxChange} />
          <label forhtml="check"></label>
          {/* {
            (check === true) ?
              <p className="list__text active" onDoubleClick={this.onDoubleClick}>{text}</p>
              : <p className="list__text" onDoubleClick={this.onDoubleClick}>{text}</p>
          } */}
          <input value={currentText} onKeyPress={this.handleBlur} readOnly={isReadOnly} onBlur={() => this.setState({isReadOnly:true})} onChange={this.handleEdit} className={`list__text ${check ? 'active' : ''}`} onDoubleClick={this.onDoubleClick} />
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

export { ToDo } // именованный экспорт