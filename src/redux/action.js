/*引入action-types*/
import {RECEIVE_CATELIST,RECEIVE_CATEGORYLIST,
  RECIVE_SEARCHNAMELIST,CLEAN_SEARCHLIST,RECEIVE_DEFAULT_TOPICLIST,RECEIVE_NEW_TOPICLIST
} from "./action-types"
/*引入发送请求函数*/
import {reqCateList,reqCategorylist,reqSearchName,reqDefaultList,reqNewList} from "../api"
/*定義同步action*/
export const receive_catelist = data=>({type:RECEIVE_CATELIST,data})
export const receive_categorylist = data=>({type:RECEIVE_CATEGORYLIST,data})
export const recive_searchnamelist = data=>({type:RECIVE_SEARCHNAMELIST,data})
export const clean_searchlist = ()=>({type:CLEAN_SEARCHLIST})

export const receive_default_topiclist = data=>({type:RECEIVE_DEFAULT_TOPICLIST,data})
export const receive_new_topiclist = data=>({type:RECEIVE_NEW_TOPICLIST,data})

/*定義异步action*/
export const getCateList = ()=>{
  return async dispatch=>{
    const result = await reqCateList()
    if(result.code===0){
      const data = result.data
      dispatch(receive_catelist(data))
    }
  }
}
export const getCategorylist = ()=>{
  return async dispatch=>{
    const result = await reqCategorylist()
    if(result.code===0){
      const data = result.data
      dispatch(receive_categorylist(data))
    }
  }
}

export const getSearchList = searchName=>{
  return async dispatch=>{
    const result = await reqSearchName(searchName)
    if(result.code==='200'){
      const data = result.data
      /*dispatch分发同步action*/
      dispatch(recive_searchnamelist(data))
    }
  }
}

export const getDefaultList = ()=>{
   return async dispatch=>{
     const result = await reqDefaultList()
     if(result.code==='200'){
       const data = result.data
       let topiclist = []
        data.forEach((item,index)=>{
           item.topics.forEach((item,index)=>{
             topiclist.push(item)
           })
        })
        dispatch(receive_default_topiclist(topiclist))
     }
   }
}
export const getNewList = page=>{
  return async dispatch=>{
    const result = await reqNewList(page)
    if(result.code==='200'){
      let newTopicList = []
      result.data.result.forEach((item,index)=>{
        newTopicList = newTopicList.concat(item.topics)
      })
      dispatch(receive_new_topiclist(newTopicList))
    }
  }
}




