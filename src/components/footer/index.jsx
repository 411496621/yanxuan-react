import React, {Component} from 'react'
import "./index.styl"
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="item ">
          <i className="iconfont icon-shouye"></i>
          <span>首页</span>
        </div>
        <div className="item">
          <i className="iconfont icon-category"></i>
          <span>分类</span>
        </div>
        <div className="item">
          <i className="iconfont icon-cubelifangti"></i>
          <span>识物</span>
        </div>
        <div className="item">
          <i className="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </div>
        <div className="item">
          <i className="iconfont icon-geren"></i>
          <span>个人</span>
        </div>
      </div>
    )
  }
}

export default Footer
