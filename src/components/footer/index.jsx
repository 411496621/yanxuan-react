import React, {Component} from 'react'
import "./index.styl"
import {withRouter} from "react-router-dom"
class Footer extends Component {

  state ={
    showItems:[
      {content:'首页',iconclassName:'iconfont icon-shouye',path:'/home'},
      {content:'分类',iconclassName:'iconfont icon-category',path:'/category'},
      {content:'识物',iconclassName:'iconfont icon-cubelifangti',path:'/findgoods'},
      {content:'购物车',iconclassName:'iconfont icon-gouwuche',path:'/shopcart'},
      {content:'个人',iconclassName:'iconfont icon-geren',path:'/profile'},
    ]
  }
  gotoPath = (pathString)=>{
    this.props.history.push(pathString)
  }
  hasActiveClass=Item=>{
    return Item.path === this.props.match.path?'item active':'item'
  }
  render() {
    const {showItems} = this.state
    return (
      <div id="footer">
        {
          showItems.map((Item,index)=>{
            return (
              <div  onClick={this.gotoPath.bind(this,Item.path)} className={this.hasActiveClass(Item)} key={index}>
                <i className={Item.iconclassName}></i>
                <span>{Item.content}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}
/*将footer包装成路由组件*/
export default withRouter(Footer)
