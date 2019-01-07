import React, {Component} from 'react'
import "./index.styl"

class Style1 extends Component {
  render() {
    return (
      <div className="style1">
        <div>
          <div className="u-name">
        <span className="ava">
          <img v-lazy="topicItem.avatar" alt="" />
        </span>
            <span>选妹</span>
          </div>
          <div className="title">

            网易CEO丁磊的年度好货推荐，全场超低三石福利价！低至50%Off

          </div>
          <div className="u-pic">
            <img v-lazy="topicItem.picUrl" alt="" />
          </div>
          <div className="u-rcount">
            <span>xxxx人看过</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Style1
