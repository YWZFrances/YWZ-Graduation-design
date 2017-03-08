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
				<div className="q">qqqqqqqqqqq</div>
				<div className="w">wwwwwwww</div>
			</div>
		)
	}
}
export default  Header
