import React from 'react'
import PropTypes from 'prop-types'
import  ToDo  from '../ToDo/container'

class List extends React.Component {

  renderList = (onDeleteToDo, onEditToDo, onCheckBox) => {
    const { data, mode } = this.props
    let filteredArray = data;

    if (mode === 'active') {
      filteredArray = data.filter(elem => !elem.status)
    }

    if (mode === 'completed') {
      filteredArray = data.filter(elem => elem.status)
    }

    const todos = filteredArray.map(function (item) {
      return <ToDo onCheckBox={onCheckBox} onEditToDo={onEditToDo} onDeleteToDo={onDeleteToDo} key={item._id} data={item} />
    })
    return todos
  }


  render() {
    const {onDeleteToDo, onEditToDo, onCheckBox} = this.props
    return (
      <div className="list">
        {this.renderList(onDeleteToDo, onEditToDo, onCheckBox)}
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array.isRequired
}

export default List