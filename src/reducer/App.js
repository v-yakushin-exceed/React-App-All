import { DEL_ELEM, DEL_ALL, GET_TODOS, SET_CHECK_ID, ADD_TODO, SET_MODE, EDIT_TODO } from '../store/constans'

const initialState = {
  mode: 'all',
  toDo: [],
  isAllChecked: false,
}


export function AppReducer(state = initialState, action) {
  console.log('Action', action.type, action.payload)
  switch (action.type) {
    case SET_CHECK_ID:
      return {
        ...state,
        toDo: state.toDo.map(item => {
          if (action.payload._id === item._id) {
            return {
              ...item,
              status: action.payload.status
            }
          }
          return item
        })
      }
    case DEL_ELEM:
      return {
        ...state,
        toDo: state.toDo.filter((item) => action.payload !== item._id)
      }
    case DEL_ALL:
      return {
        ...state,
        toDo: state.toDo.filter((item) => !item.status)
      }
    case GET_TODOS:
      return { ...state, toDo: action.payload }

    case ADD_TODO:
      return {
        ...state,
        toDo: [action.payload, ...state.toDo]
      }
    case EDIT_TODO:
      return {
        ...state,
        toDo: state.toDo.map(item => {
          if (action.payload._id === item._id) return { ...item, text: action.payload.currentText }
          return item
        })
      }
    case SET_MODE:
      console.log("MODE", action.payload, state.mode)
      return {
        ...state,
        mode: action.payload
      }
    default:
      return state
  }
}