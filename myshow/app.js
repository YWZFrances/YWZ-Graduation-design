

import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"

import IndexPage from "./product/main/indexPage"
import ListPage from "./product/main/listPage"
import DetailPage from "./product/main/detailPage"
import Information from "./product/main/proInformation"
import CartPage from "./order/main/cartPage"

ReactDOM.render(<Router history={hashHistory}>
	  		
    <Route path="/" component={IndexPage}  />
	<Route path="list" component={ListPage}  />
	<Route path="detail(/:goodsID)" component={DetailPage}  />
	<Route path="information(/:goodsID)" component={Information}  />
	<Route path="cart" component={CartPage}  />
</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}