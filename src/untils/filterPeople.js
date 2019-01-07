
export default function (value) {
  let result
  const stringValue = value.toString()
  if(stringValue.length>=5){ // 人数的位数超过五
    result = stringValue.slice(0,stringValue.length-4) +'w'
  }else{
    result = stringValue
  }
  return result
}
