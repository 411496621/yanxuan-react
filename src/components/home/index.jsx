import React, {Component} from 'react'
import Footer from "../footer"
import Split from "../split"
import "./index.styl"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import Swiper from "swiper"
class Home extends Component {
  static propTypes = {
    catelist:PropTypes.array.isRequired,
    getCateList:PropTypes.func.isRequired
  }
  state = {
    activeIndex:0,
    navArr:['居家','鞋包配饰','服装','电器','洗护','饮食','餐厨','婴童','文体','特色区']
  }
  changeActiveIndex(index){
    this.setState({
      activeIndex:index
    })
  }
  componentDidMount() { // 进行redux相关的操作 请求数据
    this.props.getCateList()
  }
  componentDidUpdate() {
    if(!this.bs){
      this.bs = new BScroll('.wrapper',{
        scrollX:true
      })
    }else {
      this.bs.refresh()
    }

    if(!this.mySwiper){
      new Swiper('.swiper-container', {
        //autoplay: true,//可选选项，自动滑动
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{
          disableOnInteraction: false
        }
      })
    }
  }

  render() {
    const {activeIndex} = this.state
    const {catelist} = this.props
    return (
      <div className='atguigu home'>
        <div className="header">
          <div className="header-top">
            <div className="left">网易严选</div>
            <div className="input-text" onClick={ (()=>{this.props.history.push('/search')}).bind(this)   }>
              <span className="placeholder">搜索商品,共19959款好物</span>
            </div>
            <div className="right" onClick={ (()=>this.props.history.push('/profile')).bind(this) } >登录</div>
          </div>
          <div className="nav-wrapper">
            <div className="tabs">
              <div className="wrapper">
                 <ul className="content">
                   {
                     this.state.navArr.map((Item,index)=>{
                       return (
                         <li key={index} onClick={this.changeActiveIndex.bind(this,index)} className={index===activeIndex?'active':null}>
                           {Item}
                         </li>
                       )
                     })
                   }
                 </ul>
              </div>
            </div>
            <div className="arrow">
              <span>&#8595;</span>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="swiper-container mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0"/>
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/45e2a2c3cf3e6881fbbcdf0b4f1a54e8.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/22c9df75da89c6a8ea7aa99287fb5d67.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/0dde49bdc6a317125c1a051a81cce8d4.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/96cf611743d7b382c11031f29152fa04.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/5c34dc433aabb6f237dc726ae6087c5f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
                <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/df6d04118fb06870b7d01b868dac7829.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" />
                </div>
              </div>
              <div id="pages" className="swiper-pagination"></div>
          </div>
          <div className="service-wrapper">
            <ul className="service-list">
              <li>网易自营品牌</li>
              <li>30天无忧退货</li>
              <li>48小时快速退款</li>
            </ul>
          </div>

          <div className="catelist-wrapper">
            <div className="cateList">
              {
                catelist.map((Item,index)=>{
                  return (
                    <a href="javascript:;"  key={index} >
                      <img src={Item.subCateList[0].wapBannerUrl} alt="" />
                      <span>{Item.name}</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <Split/>
          <div className="rookie-wrapper">
            <div className="rookie-header">
              <span>新人专享礼</span>
            </div>
            <div className="rookie-content">
              <div className="left">
                <div className="text">新人专享礼包</div>
                <img src="//yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png" alt="" />
              </div>
              <div className="right">
                <div className="right-top">
                  <div className="title">福利社</div>
                  <div className="text">今日特价</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/e231234a324d07b620af7ffd3734642b.png?imageView&thumbnail=200x200&quality=75"
                    alt="" />
                </div>
                <div className="right-bottom">
                  <div className="title">新人拼团</div>
                  <div className="text">1元起包邮</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/db52ac0a791cecb9129a4a34fc864f48.png?imageView&thumbnail=200x200&quality=75"
                    alt="" />
                </div>
              </div>
            </div>
          </div>
          <Split/>
          <div className="pinpai-wrapper">
            <div className="pinpai-header">品牌制造商直供</div>
            <div className="content">
              <ul className="list">
                <li>
                  <h4 className="title">海外制造商</h4>
                  <div>
                    <span className="price">9.9元起</span>
                    <span className="description">上新</span>
                  </div>
                </li>
                <li>
                  <h4 className="title">CK制造商</h4>
                  <div>
                    <span className="price">25元起</span>
                  </div>
                </li>
                <li>
                  <h4 className="title">新秀丽制造商</h4>
                  <div>
                    <span className="price">34.9元起</span>
                  </div>
                </li>
                <li>
                  <h4 className="title">MUJI制造商</h4>
                  <div>
                    <span className="price">35元起</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Split/>
          <div className="hot-sale">
            <h4 className="hot-sale-header">类目热销榜</h4>
            <div className="content">
              <div className="content-top">
                <div className="left">
                  <span className="text">服装榜</span>
                  <img
                    src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </div>
                <div className="right">
                  <span className="text">鞋包配饰榜</span>
                  <img
                    src="http://yanxuan.nosdn.127.net/246e27aba6243b29f61bbdee9651b393.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </div>
              </div>
              <ul className="list">
                <li>
                  <div className="name">居家榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/5b0aed79b7c9a0555b930ece1cf6c6e4.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">饮食榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">电器榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/73a065d6fc8c32197b54421808c54788.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">洗护榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/2d43d642d928240ef2013e8da1c133b2.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">餐厨榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/02da8bce2fa3a182d398f6a09e8ac2f5.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">婴童榜</div>
                  <img
                    src='http://yanxuan.nosdn.127.net/ebffc08b434eaab87392fc401c58fcc5.png?imageView&quality=65&thumbnail=200x200'
                    alt="" />
                </li>
                <li>
                  <div className="name">文体榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/55425f24345d01992d61a1646325ac94.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
                <li>
                  <div className="name">特色区榜</div>
                  <img
                    src="http://yanxuan.nosdn.127.net/924feec4a04a8d8570b28f7b6978d9a5.png?imageView&quality=65&thumbnail=200x200"
                    alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
