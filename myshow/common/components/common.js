//全局的组件，包括头部，底部，内容
import '../style/common.css'
import React,{Component} from 'react'

class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className = "header">
				<ul className = 'header-list'>
					<li className="header-btn">
						{this.props.hasBack?<span onClick={()=>this.shangyige()}>{"<"}</span>:''}
					</li>
					<li className="header-tit">
						{this.props.title}
					</li>
					<li className='toCart' style={{marginRight:"15px"}}>
						{this.props.rightBtn?<a onClick={()=>this.toCart()}>购物车</a>:""}
					</li>
					<li className='toCart' style={{marginRight:"15px"}}>
						{this.props.rightBtn2?<a onClick={()=>this.toMyOrder()}>我的</a>:""}
					</li>
				</ul>
			</div>
		)
	}
}
Header.defaultProps={
	hasBack:true
};

class Footer extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="footer">
				<ul className='footer-list'>
					{
						this.props.footerData.map((ele,index)=><li key={index} onClick={()=>this.handleClick(this.index)}>
							<a className={index==this.props.active?"active":''}>{ele}</a>
						</li>)
					}
				</ul>
			</div>
		)
	}
}
Footer.defaultProps={
	footerData:['首页','列表','购物车','我的','更多']
}

export { Header,Footer}
