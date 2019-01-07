import React, {Component} from 'react'
import "./index.styl"
import Swiper from "swiper"
class Style4 extends Component {

  componentDidMount() {
    console.log(this.refs.mySwiper)
    new Swiper(this.refs.mySwiper,{
      loop:true,
      /*autoplay:{
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },*/
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
    return (
      <div className="style4">
        <div>
          <div className="title">
            xxx
          </div>
        </div>
        <div ref="mySwiper" className="swiper-container mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide" v-for="(Item,index) in topicItem.lookList" key="index">
              <div className="u-pic">
                <img src='https://yanxuan.nosdn.127.net/43898d5d6bfa1ef792e87777b853c8dc.jpg' alt="" />
              </div>
           </div>
        </div>
      </div>
  </div>
    )
  }
}

export default Style4
