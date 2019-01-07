import React, {Component} from 'react'
import "./index.styl"
import Style1 from "./style1"
import Style2 from "./style2"
import Style4 from "./style4"
class Tab0 extends Component {
  render() {
    return (
      <div className="main">
        <div className="content">
          <div v-for="(topicItem,index) in topiclist" key="index">
            <Style1 />
            <Style2 />
            <Style4 />

          </div>
        </div>
      </div>
    )
  }
}

export default Tab0
