/*引入action-types*/
import {RECEIVE_CATELIST,RECEIVE_CATEGORYLIST} from "./action-types"
/*引入发送请求函数*/
import {reqCateList,reqCategorylist} from "../api"
/*定義同步action*/
export const receive_catelist = data=>({type:RECEIVE_CATELIST,data})
export const receive_categorylist = data=>({type:RECEIVE_CATEGORYLIST,data})

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

