import {connect} from "react-redux"
import Tab0 from "../components/findgoods/tab0"
import {getDefaultList,getNewList} from "../redux/action"

export default connect(
  state=>({topiclist:state.topiclist}),
  {getDefaultList,getNewList}
)(Tab0)
