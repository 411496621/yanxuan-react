import React, {Component} from 'react'
import Footer from "../footer"
import {Switch,Route,Redirect} from "react-router-dom"
import Tab0 from "../../containers/tab0"
import Tab1 from "./tab1"
import Tab2 from "./tab2"
import Tab3 from "./tab3"
import Tab4 from "./tab4"

import './index.styl'
class FindGoods extends Component {

  state = {
    currentIndex:0,
    list:['推荐','達人','上新','晒单','Home']
  }
  gotoTab = id=>{
    this.setState({
      currentIndex:id
    })
    this.props.history.replace(`/findgoods/tab${id}`)
  }

  render() {
    const {currentIndex,list} = this.state
    return (
      <div className="find-goods">
        <div  className='find-goods-header' >
          <div className='left' onClick={(()=>(this.props.history.push('/home'))).bind(this)}>
            <i className="iconfont icon-shouye"></i>
          </div>
          <div className='middle'>
            网易严选
          </div>
          <div className="right" onClick={(()=>(this.props.history.push('/shopcart'))).bind(this)}>
            <i className="iconfont icon-gouwuche"></i>
          </div>
        </div>
        <nav className="nav-wrapper">
          <ul className="nav-list">
            {
              list.map((Item,index)=>{
                return (
                  <li onClick={this.gotoTab.bind(this,index)} key={index} className={currentIndex===index?'active':null}><a>{Item}</a></li>
                )
              })
            }
          </ul>
        </nav>
        <Switch>
          <Route path='/findgoods/tab0' component={Tab0} />
          <Route path='/findgoods/tab1' component={Tab1} />
          <Route path='/findgoods/tab2' component={Tab2} />
          <Route path='/findgoods/tab3' component={Tab3} />
          <Route path='/findgoods/tab4' component={Tab4} />
          <Redirect  to='/findgoods/tab0' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default FindGoods
