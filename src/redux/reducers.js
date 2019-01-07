import {combineReducers} from "redux"
/*引入action-types*/
import {RECEIVE_CATEGORYLIST,RECEIVE_CATELIST,
  RECIVE_SEARCHNAMELIST,CLEAN_SEARCHLIST,
  RECEIVE_DEFAULT_TOPICLIST,RECEIVE_NEW_TOPICLIST
} from "./action-types"

const cateInitList = []
function catelist(previous = cateInitList,action) {
  switch (action.type) {
    case RECEIVE_CATELIST:
      return action.data
    default:
      return previous
  }
}

const  categoryInitList =[]

function categorylist(previous = categoryInitList,action) {
  switch (action.type) {
    case RECEIVE_CATEGORYLIST:
      return action.data
    default:
      return previous
  }
}

const searchInitList = []
function searchList(previous = searchInitList,action) {
  switch (action.type) {
    case RECIVE_SEARCHNAMELIST:
      return action.data
    case CLEAN_SEARCHLIST:
      return searchInitList
    default:
      return previous
  }
}

const topicInitList = []
function topiclist(previous = topicInitList,action ) {
  switch (action.type) {
    case RECEIVE_DEFAULT_TOPICLIST:
      return action.data
    case RECEIVE_NEW_TOPICLIST:
      return  [...previous,...action.data]
    default:
      return previous
  }
}


export default combineReducers({
  catelist,
  categorylist,
  searchList,
  topiclist
})

