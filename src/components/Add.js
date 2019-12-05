import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types

class Add extends React.Component {
  state = {
    text: '',
  }
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const { text } = this.state
      
      this.props.onAddNews({
        text,
        status: false,
      })

      this.setState({ text: "" })
    }
  }

  handleCheckboxAll = () => {
    this.props.onCheckAllBox()
    console.log(this.props.data)
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }
  validate = () => {
    const { text } = this.state
    if (text.trim()) {
      return true
    }
    return false
  }

  render() {
    const { text } = this.state
    const { isAllChecked } = this.props
    const { data } = this.props
    return (
      <div className='add__text'>
        {
          data.length ?
            <React.Fragment>
              <input
                name='checkAll'
                className='select__all'
                type='checkbox'
                onChange={this.handleCheckboxAll}
                checked={isAllChecked}
              />
              <label forhtml="check"></label>
            </React.Fragment>
            : null
        }
        <input
          id='text'
          type='text'
          className='Add__todo'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder='What needs to be done?'
          value={text} />
      </div>
    )
  }
}

Add.propTypes = {
  onAddNews: PropTypes.func.isRequired, // func используется для проверки передачи function
}

export { Add } // именованный экспорт