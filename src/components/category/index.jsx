import React, {Component} from 'react'
import Footer from "../footer"
import PropTypes from "prop-types"
import "./index.styl"
import BScroll from "better-scroll"

class Category extends Component {
  static propTypes = {
    categorylist:PropTypes.array.isRequired,
    getCategorylist:PropTypes.func.isRequired
  }
  state = {
    menuIndex:0
  }

  changeIndex = menuIndex=>{
    /*当index发生改变的时候*/
    this.setState({
      menuIndex
    })
  }
  componentDidMount() {
    this.props.getCategorylist()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(!this.bs1){  // 还没有bs时 创建
      this.bs1 = new BScroll('.menu-wrapper',{
        click:true
      })
    }else{
      this.bs1.refresh()
    }

    if(!this.bs2){ //还没有bs时 创建
      this.bs2 = new BScroll('.list-detail',{
        click:true,
      })
    }else{
      this.bs2.refresh()
    }
  }



  render() {
    const {categorylist} = this.props
    const {menuIndex} = this.state

    /*页面将要发生变化的时候的一些状态的改变 相当于computed或者watch*/
    /*选择selectedCategory*/
    let selectedCategory
    selectedCategory = categorylist.find((item,index)=>index===menuIndex)
    return (
      <div className='atguigu category'>
        <div className="header">
          <div className="header-content" onClick={(()=>{this.props.history.push('/search')}).bind(this)}>
          搜索商品,共19487款好物
          </div>
        </div>
        <div className="main">
          <div className="list-menu">
            <div className="menu-wrapper">
                <ul className="list">
                  {categorylist.map((Item,index)=>{
                    return (
                      <li onClick={this.changeIndex.bind(this,index)} key={index} className={index===menuIndex?'active':null}>
                        <span>{Item.name}</span>
                      </li>
                    )
                  })}
                </ul>
            </div>
          </div>
          <div className="list-detail"  >
            {
              selectedCategory?(
                <div className="detail-wrapper" >
                  <div className="banner">
                    <img  src={selectedCategory.bannerUrl}  alt=""/>
                  </div>
                  <div className="text">{selectedCategory.name}分类</div>
                  <ul>
                    {selectedCategory.subCateList.map((Item,index)=>{
                      return (
                        <li   key={index}>
                          <div>
                            <img src={Item.wapBannerUrl} />
                            <span>{Item.name}</span>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ):null
            }
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Category
