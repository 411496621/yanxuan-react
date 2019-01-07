import {connect} from "react-redux"
import Home from "../components/home"
import {getCateList} from "../redux/action"

export default connect(
  state=>({catelist:state.catelist}),
  {getCateList}
)(Home)
