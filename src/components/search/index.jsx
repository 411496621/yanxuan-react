import React, {Component} from 'react'
import "./index.styl"

class Search extends Component {

  getValue = ev=>{
    console.log(ev.target.value)
  }

  render() {
    return (
      <div>
          <div className="search-wrapper">
            <div className="search-main">
              <input onChange={this.getValue}  type="text" placeholder="高級穿著 時尚大衣 六折起" />
            </div>
            <span >取消</span>
          </div>
      </div>
    )
  }
}

export default Search
