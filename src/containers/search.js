import {connect} from "react-redux"
import Search from "../components/search"
import {getSearchList,clean_searchlist} from "../redux/action"

export default connect(
  state=>({searchList:state.searchList}),
  {getSearchList,clean_searchlist}
)(Search)
