import React, {Component} from 'react'
import "./index.styl"
import PropTypes from "prop-types"
class Search extends Component {
  static propTypes ={
    searchList:PropTypes.array.isRequired,
    getSearchList:PropTypes.func.isRequired,
    clean_searchlist:PropTypes.func.isRequired
  }
  state = {
    searchName:'',
    time:0
  }
  getValue = ev=>{
     let searchName
     if (ev.target.value.trim()){
       searchName = ev.target.value.trim()
       this.setState({
         searchName
       })
       /*函数节流*/
       if(Date.now()-this.state.time>1000){
          console.log("xxx")
          this.state.time = Date.now()
          this.props.getSearchList(searchName)
       }
     }else{
       this.setState({
         searchName:''
       })
       this.props.clean_searchlist()
     }
  }

  goBack=()=>{
    this.props.history.goBack()
    this.props.clean_searchlist()
    this.setState({
      searchName:''
    })
  }

  render() {
    const {searchList} = this.props
    return (
      <div>
          <div className="search-wrapper">
            <div className="search-main">
              <input onChange={this.getValue}  type="text" placeholder="高級穿著 時尚大衣 六折起" />
            </div>
            <span onClick={this.goBack} >取消</span>
          </div>
          <ul class="search-list">
            {
              searchList.map((item,index)=>{
                return (
                  <li key={index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}

export default Search
