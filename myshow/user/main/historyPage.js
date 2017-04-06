import {Header,Footer,Content,SubHeader} from  "../../common/components/common"

import React, {Component} from  "react"




class HistoryPage extends Component　{
    constructor(props){
        super(props)
    }
    handleClick(id){
        console.log(id);
        this.props.changeClassID(id);
    }
    render (){
        return (
            <div>
            <Header title={"历史记录"} />
            <Content>
            	<h1>历史记录</h1>
            </Content>
                
                <Footer hasFooter={true}  />
            </div>
        )
    }
}
export  default  HistoryPage