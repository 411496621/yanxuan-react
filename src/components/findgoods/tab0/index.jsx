import React, {Component} from 'react'
import "./index.styl"
import Style1 from "./style1"
import Style2 from "./style2"
import Style4 from "./style4"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
class Tab0 extends Component {
  static propTypes = {
    topiclist:PropTypes.array.isRequired,
    getDefaultList:PropTypes.func.isRequired,
    getNewList: PropTypes.func.isRequired
  }
  state = {
    page:0,
    time:0
  }
  componentDidMount() {
    this.props.getDefaultList()
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    /*绑定better-scroll*/
    if(!this.bs){
      this.bs = new BScroll('.main',{
        click:true,
        pullUpLoad: {
          threshold: 70
        }
      })
      this.bs.on('pullingUp', ()=> {
        /*函数节流 满足条件的话 发请求 上拉加载*/
        if(Date.now()-this.state.time>1000){
          this.state.time = Date.now()
          this.state.page++
          this.props.getNewList(this.state.page)
        }
        this.bs.finishPullUp()
      })
    }else{
      this.bs.refresh()
    }
  }

  render() {
    const {topiclist} = this.props

    return (
      <div className="main">
        <div className="content">
          {
            topiclist.map((Item,index)=>{
              return (
                <div  key={index}>
                  {
                    Item.style===1?<Style1 Item={Item} />:(Item.style===2?<Style2 Item={Item}/>:(Item.style===4?<Style4 Item={Item} />:null))
                  }
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

export default Tab0
