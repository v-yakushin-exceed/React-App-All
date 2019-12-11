import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos } from './actions/PageActions'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Add from './components/Add/container'
import List from './components/List/List'
import Footer from './components/Footer/container'
//import newToDo from './data/newToDo'
import './App.scss';


class App extends Component {
  state = {
    toDo: [],
    mode: 'all',
    isAllChecked: false,
  }

  componentDidMount() {
    this.props.getTodos()
      .then(toast.success("All todo loading!!!"))
      .catch(err => toast.error("Couldn't get todos"))
    this.setState({})
  }

  componentDidUpdate(prevProps) {
    if (prevProps.toDo !== this.props.toDo) {
      //  console.log("Update", this.props.toDo)
      toast.success("All Update!!!")
      this.setState({
        ...this.state,
        toDo: this.props.toDo
      })
    }
    if (prevProps.mode !== this.props.mode) {
      toast.success("All mode Update!!!")
      this.setState({
        ...this.state,
        mode: this.props.mode
      })
    }
  }

  handleDeleteAllToDo = () => {
    toast.success("Well done brooo!!!")
  }

  handleAddToDo = (data) => {
    console.log("DATA", data)
    axios.post(`http://localhost:1234/products/create`, { ...data })
      .then(res => {
        const newToDo = [res.data, ...this.state.toDo];
        this.setState({ toDo: newToDo });
        toast.success("Another toDo has arrived");
      }).catch(err => console.log('ERR', err))
  }

  handleDeleteToDo = (id) => {
    toast.error("one less toDo")
    /*  axios.delete(`http://localhost:1234/products/delete/${id}`)
        .then(res => {
          const newToDo = this.state.toDo.filter((item) => item._id !== id);
          this.setState({ toDo: newToDo });
          toast.error("one less toDo")
        }).catch(err => console.log('ERR', err)) */
  }

  handleEditToDo = (id, currentText) => {
    axios.put(`http://localhost:1234/products/modify/${id}`, { "text": currentText })
      .then(res => {
        const newToDo = this.state.toDo.map(item => {
          if (id === item._id) return { ...item, text: currentText }
          return item
        })
        this.setState({ toDo: newToDo })
        toast.warn("can you handle it")
      }).catch(err => console.log('ERR', err))
  }

  handleCheckToDo = (status) => {
    
    if (status) return toast.success("It`s nice") 
    return toast.warn("Be careful") 
    /*
   this.props.checkTodo()
     .then(res => {
       const newToDo = this.state.toDo.map(item => {
         if (id === item._id) return { ...item, status: !item.status }
         return item
       })
       toast.success("It`s nice")
       this.setState({ toDo: newToDo }, () => {
         this.setState({ isAllChecked: this.state.toDo.every(elem => elem.status) })
       })
     }).catch(err => console.log('ERR', err)) */
  }

  handleAllCheckToDo = () => {
    this.setState({ isAllChecked: !this.state.isAllChecked }, () => {
      this.setState({ todo: this.state.toDo.map(item => item.status = this.state.isAllChecked) })
    })
  }

  render() {
    const { mode } = this.props
    console.log('this.state', this.state)
    return (
      <div className="root__items">
        <h1>ToDo</h1>

        <Add
          isAllChecked={this.state.isAllChecked}
          data={this.state.toDo}
          onAddToDo={this.handleAddToDo}
          onCheckAllBox={this.handleAllCheckToDo}
        />
        <List
          //delElem={delElem}
          //setCheckId={setCheckId}
          //editToDo={editToDo}
          onCheckBox={this.handleCheckToDo}
          onDeleteToDo={this.handleDeleteToDo}
          onEditToDo={this.handleEditToDo}
          data={this.state.toDo}
          // mode={this.state.mode}
          mode={mode}
        />
        <Footer
          data={this.state.toDo}
          onDeleteAllToDo={this.handleDeleteAllToDo}
          onMode={this.handleMode}
        />
        <ToastContainer />
      </div>
    )
  }
}


// приклеиваем данные из store
const mapStateToProps = store => {
  return {
    toDo: store.AppReducer.toDo,
    mode: store.AppReducer.mode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //setCheckId: (id, status) => dispatch(setCheckId(id, status)),
    //delElem: (id) => dispatch(delElem(id)),
    //delAll: () => dispatch(delAll()),
    getTodos: () => dispatch(getTodos()),
    // addToDo: (data) => dispatch(addToDo(data)),
    //editToDo: (id, currentText) => dispatch(editToDo(id, currentText)),
    //setMode: (name) => dispatch(setMode(name))
  }
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps, mapDispatchToProps)(App)
