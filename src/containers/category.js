import {connect} from "react-redux"
import Category from "../components/category"
import {getCategorylist} from '../redux/action'

export default connect(
  state=>({categorylist:state.categorylist}),
  {getCategorylist}
)(Category)
