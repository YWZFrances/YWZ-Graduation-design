import {Header,Footer,Content,SubHeader} from "../../common/components/common"
import ProductList from "../components/productList.js"//还没写？？？？怎么搞
import {ScrollOptions} from "../../common/config/config.js"
import React, {Components} from "react"
import ReactIScroll from "react-iscroll"
//商品分类列表
class ClassList extends Component{
	constructor(props){
		super(props)
	}
	handleClick(id){
		console.log(id);
		this.props.changeClassID(id);
	}
	render(){
		return (
			<ul className="class-list">
				{
					this.props.classData.map((ele,i)=>
						<li onClick={()=>this.handleClick(ele.classID)} key={i}>
							{ele.className}
						</li>
					)
				}
			</ul>
		)
	}
	ClassList.defaultProps={
		classData:[]
	};
}
