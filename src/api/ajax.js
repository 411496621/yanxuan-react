import axios from "axios"
import qs from "querystring"
export default (url,data={},method="GET")=>{
  let promise
  if(method==="GET"){
    promise = axios.get(url,
      {
        params:data
      }
    )
  }else if(method==='POST'){
    promise = axios.post(url,data)
  }else if(method==='POSTFORM'){
    promise = axios({
      url,
      data:qs.stringify(data),
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    })
  }
  return new Promise((resolve,reject)=>{
    promise.then(response=>{
      const {data} = response
      resolve(data)
    }).catch(err=>{
      alert("请求出错"+err.message)
    })
  })
}
