

import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"

import IndexPage from "./product/main/indexPage"
import ListPage from "./product/main/listPage"
import DetailPage from "./product/main/detailPage"

ReactDOM.render(<Router history={hashHistory}>
	  		
    <Route path="/" component={IndexPage}  />
	<Route path="list" component={ListPage}  />
	<Route path="detail(/:goodsID)" component={DetailPage}  />

</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}