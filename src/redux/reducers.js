import {combineReducers} from "redux"
/*引入action-types*/
import {RECEIVE_CATEGORYLIST,RECEIVE_CATELIST} from "./action-types"

const cateInitList = []
function catelist(previous=cateInitList,action) {
  switch (action.type) {
    case RECEIVE_CATELIST:
      return action.data
    default:
      return cateInitList
  }
}

const  categoryInitList =[]

function categorylist(previous=categoryInitList,action) {

  switch (action.type) {
    case RECEIVE_CATEGORYLIST:
      return action.data
    default:
      return categoryInitList
  }
}

export default combineReducers({
  catelist,
  categorylist
})

