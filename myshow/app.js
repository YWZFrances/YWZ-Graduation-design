

import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"

import IndexPage from "./product/main/indexPage"
import ListPage from "./product/main/listPage"
import DetailPage from "./product/main/detailPage"
import Information from "./product/main/proInformation"
import CartPage from "./order/main/cartPage"
import LoginPage from "./user/main/loginPage"
import RegisterPage from "./user/main/registerPage"
import MorePage from "./user/main/morePage"

ReactDOM.render(<Router history={hashHistory}>
	  		
    <Route path="/" component={IndexPage}  />
	<Route path="list" component={ListPage}  />
	<Route path="detail(/:goodsID)" component={DetailPage}  />
	<Route path="information(/:goodsID)" component={Information}  />
	<Route path="cart" component={CartPage}  />
	<Route path="login" component={LoginPage}  />
	<Route path="register" component={RegisterPage}  />
	<Route path="more" component={MorePage}  />
	
</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}