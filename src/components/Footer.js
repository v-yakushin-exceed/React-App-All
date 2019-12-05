import React from 'react'
import PropTypes from 'prop-types'


class Footer extends React.Component {

    buttonDelete = () => {
        this.props.onDeleteAllToDo(this.props.data)
      }
      buttonMode = (e) => {
        this.props.onMode(e.currentTarget.name)
      }



    render() {
        const { data } = this.props
        const counter = data.filter(elem => elem.status === false)
        const complete = data.filter(elem => elem.status === true)
        return (
            <React.Fragment>
                {
                    data.length ?

                        <div className="list__nav">
                            <div className="nav__left">
                                <p>{counter.length} items left</p>
                            </div>
                            <div className="nav__tab">
                                <button name='all' onClick={this.buttonMode}>All</button>
                                <button name='active' onClick={this.buttonMode}>Active</button>
                                <button name='completed' onClick={this.buttonMode}>Completed</button>
                            </div>
                            <div className="nav__right">
                                {
                                    complete.length ?
                                        <button onClick={this.buttonDelete}>Clear Completed</button>
                                        : null}
                            </div>
                        </div>
                        : null}
            </React.Fragment>
        );
    }
}






Footer.propTypes = {
    data: PropTypes.array.isRequired
}

export { Footer }