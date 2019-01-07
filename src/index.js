import React from "react"
import ReactDom from "react-dom"
import App from "./components/app"
import {Provider} from "react-redux"
/*引入store*/
import store from "./redux/store"
/*引入reset.css*/
import "./common/css/reset.css"
/*引入mock数据*/
import "./mock"
/*引入swiper的css*/
import 'swiper/dist/css/swiper.min.css'

ReactDom.render(
  <Provider store={store}><App/></Provider>,
  document.getElementById('app'))
