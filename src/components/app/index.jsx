import React, {Component} from 'react'
import {Switch,BrowserRouter,Route,Redirect} from "react-router-dom"
/*引入路由组件*/
import Home from "../../containers/home"
import Category from '../../containers/category'
import FindGoods from "../findgoods"
import Profile from "../profile"
import ShopCart from "../shopcart"
import Search from "../search"

/*引入app内的样式*/
import './index.styl'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/findgoods' component={FindGoods}/>
          <Route path='/category' component={Category}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/search' component={Search} />
          <Redirect to='/home' />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
