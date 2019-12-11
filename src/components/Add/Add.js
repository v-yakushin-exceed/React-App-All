import React from 'react'
import PropTypes from 'prop-types'

class Add extends React.Component {
  state = {
    text: '',
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const { text } = this.state
      this.props.addToDo({
        text: text.trim(),
        status: false,
      })
      this.setState({ text: '' })
    }
  }

  handleCheckboxAll = () => {
    this.props.onCheckAllBox()
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  validate = () => {
    const { text } = this.state
    if (text.trim()) {
      this.setState({ text: text })
      return true
    }
    return false
  }

  render() {
    const { text } = this.state
    const { data, isAllChecked } = this.props
    return (
      <div className='add__text'>
        {data.length ?
          <React.Fragment>
            <input
              id='check'
              name='checkAll'
              className='select__all'
              type='checkbox'
              onChange={this.handleCheckboxAll}
              checked={isAllChecked}
            />
            <label forhtml="check" className="check-box"></label>
          </React.Fragment>
          : null}
        <input
          id='text'
          type='text'
          className='Add__todo'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          placeholder='What needs to be done?'
          value={text}
        />
      </div>
    )
  }
}

Add.propTypes = {
  addToDo: PropTypes.func.isRequired
}

export default Add