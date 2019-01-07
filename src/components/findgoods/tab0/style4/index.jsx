import React, {Component} from 'react'
import "./index.styl"
import Swiper from "swiper"
import PropTypes from "prop-types"

class Style4 extends Component {
  static propTypes = {
    Item:PropTypes.func.isRequired
  }

  componentDidMount() {
    new Swiper(this.refs.mySwiper,{
      loop:true,
      autoplay:{
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      effect : 'coverflow',
      slidesPerView: 3,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 60,
        modifier: 2,
        slideShadows : true
      },
    })
  }

  render() {
    const {Item} = this.props
    return (
      <div className="style4">
        <div>
          <div className="title">
            {Item.title}
          </div>
        </div>
        <div ref="mySwiper" className="swiper-container mySwiper">
          <div className="swiper-wrapper">
            {
              Item.lookList.map((item,index)=>{
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="u-pic">
                      <img src={item.picUrl} alt="" />
                    </div>
                  </div>
                )
              })
            }

        </div>
      </div>
  </div>
    )
  }
}

export default Style4
