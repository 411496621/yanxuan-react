import React, {Component} from 'react'
import "./index.styl"
import PropTypes from "prop-types"
import filterPeople from "../../../../untils/filterPeople"

class Style1 extends Component {
  static propTypes = {
    Item:PropTypes.object.isRequired
  }
  render() {
    const {Item} = this.props
    return (
      <div className="style1">
        <div>
          <div className="u-name">
        <span className="ava">
          <img src={Item.avatar}  alt="" />
        </span>
            <span>{Item.nickname}</span>
          </div>
          <div className="title">
            {Item.title}
          </div>
          <div className="u-pic">
            <img src={Item.picUrl} alt="" />
          </div>
          <div className="u-rcount">
            <span>{filterPeople(Item.readCount)}人看过</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Style1
