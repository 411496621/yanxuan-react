import React, {Component} from 'react'
import Footer from "../footer"
class FindGoods extends Component {


  render() {
    return (
      <div className="find-goods">
        <div  className='find-goods-header' >
          <div className='left'>
            <i className="iconfont icon-shouye"></i>
          </div>

          <div className="right">
            <i className="iconfont icon-gouwuche"></i>
          </div>
        </div>
        <Footer />
     </div>
    )
  }
}

export default FindGoods
