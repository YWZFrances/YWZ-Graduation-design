import {Header,Footer,Content,SubHeader} from "../../common/components/common"
import ProductList from "./productList.js"
import {ScrollOptions} from "../../common/config/config.js"
import React, {Component} from "react"
import ReactIScroll from "reactjs-iscroll"
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
}
	ClassList.defaultProps={
		classData:[]
	};
	
class ListPage extends Component{
	constructor(props){
		super(props);//让react的Component方法帮你实现组件的方法
		this.state={
			classData:[],
			productData:[]
		};
		//设置默认的数据请求选项
		this.classID = undefined;
		this.linenumber = 5;
		this.pageCode=0;
		this.refresh=false;
		$.get("http://datainfo.duapp.com/shopdata/getclass.php",(data)=>{
			if(typeof data === 'string'){
				data=JSON.parse(data)
			}
			console.log(data)
			this.setState({
				classData:data
			})
		},"json");
		//请求商品数据
		this.getProductData();
		//改变this指向
		this.onScrollEnd = this.onScrollEnd.bind(this);
	}
	render(){
		console.log("render");
		return(
			<div className="page" id="list-page">
				<Header title="新品上市" hasBack={true} rightBtn={true} />
				<SubHeader>
					<ClassList changeClassID={(id)=>this.changeClassID(id)} classData={this.state.classData} />
				</SubHeader>
				<Content hasFooter={true} hasSubHeader={true}>
					
					<ReactIScroll ref='iScroll' iScroll={IScroll}
								options={ScrollOptions}
								onScroll={(myScroll)=>this.onScroll(myScroll)}
								onScrollEnd={this.state.productData} />
						<ProductList productData={this.state.productData} />
					
				</Content>
				<Footer active={1} />
			</div>
		)
	}
}
ListPage.defaultProps={
	listData:[]
};
export default ListPage
