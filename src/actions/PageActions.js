import axios from 'axios';
import { SET_CHECK_ID, GET_TODOS, DEL_ELEM, DEL_ALL, ADD_TODO, SET_MODE, EDIT_TODO } from '../store/constans'

export const setCheckId = (_id, status) => (dispatch) => {
  return axios.put(`http://localhost:1234/products/update/${_id}`, { "status": !status })
    .then(res => {
      dispatch({
        type: SET_CHECK_ID,
        payload: { _id, status }
      })
    }).catch(err => console.log('ERR', err))
}

export const getTodos = () => (dispatch) => {
  return axios.get(`http://localhost:1234/products/all`)
    .then(res => {
      dispatch({
        type: GET_TODOS,
        payload: res.data
      })
    })
    .catch(err => console.log('ERR', err))
}

export const delElem = (_id) => (dispatch) => {
  return axios.delete(`http://localhost:1234/products/delete/${_id}`)
    .then(res => {
      dispatch({
        type: DEL_ELEM,
        payload: _id
      })
    })
    .catch(err => console.log('ERR', err))
}

export const delAll = () => (dispatch) => {
  return axios.delete(`http://localhost:1234/products/deleteAll/all`)
  .then(res => {
    dispatch ({
      type: DEL_ALL,
    })
  })
  .catch(err => console.log('ERR', err))
}

export const addToDo = (data) => (dispatch) => {
  return axios.post(`http://localhost:1234/products/create`, { ...data })
  .then(res => {
    dispatch ({
      type: ADD_TODO,
      payload: res.data
    })
  }).catch(err => console.log('ERR', err))
}

export const editToDo = (_id, currentText) => (dispatch) => {
  return axios.put(`http://localhost:1234/products/modify/${_id}`, { "text": currentText })
      .then(res => {
        dispatch ({
          type: EDIT_TODO,
          payload: {_id, currentText}
        })
      }).catch(err => console.log('ERR', err))
}

export const setMode = (name) => (dispatch) => {
   return dispatch ({
      type: SET_MODE,
      payload: name
    })
}



