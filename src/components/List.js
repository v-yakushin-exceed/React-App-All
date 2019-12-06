import React from 'react'
import PropTypes from 'prop-types'
import { ToDo } from './ToDo'

class List extends React.Component {

  renderList = (onCheckBox, onDeleteToDo, onEditToDo) => {
    const { data, mode } = this.props
    let filteredArray = data;

    if (mode === 'active') {
      filteredArray = data.filter(elem => elem.status === false)
    }

    if (mode === 'completed') {
      filteredArray = data.filter(elem => elem.status === true)
    }

    const todos = filteredArray.map(function (item) {
      return <ToDo onEditToDo={onEditToDo} onDeleteToDo={onDeleteToDo} onCheckBox={onCheckBox} key={item._id} data={item} />
    })
    return todos
  }


  render() {
    const { onCheckBox, onDeleteToDo, onEditToDo } = this.props
    return (
      <div className="list">
        {this.renderList(onCheckBox, onDeleteToDo, onEditToDo)}
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export { List }