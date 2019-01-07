import dateCateList from "./cateList"
import dataCategoryList from "./datafenlei"
import Mock from "mockjs"

Mock.mock('/cateList',{code:0,data:dateCateList})
Mock.mock('/categorylist',{code:0,data:dataCategoryList.categoryL1List})
