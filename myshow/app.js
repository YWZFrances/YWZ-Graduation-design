
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
import ConfirmPage from "./order/main/confirmPage"
import ChangePage from "./user/main/changePage"
import ShowPage from "./user/main/showPage"
import FeedbackPage from "./user/main/feedbackPage"
import OrderListPage from "./order/main/myorderPage"
import AboutPage from "./user/main/aboutPage"
import CollectionPage from "./user/main/collectionPage"
import DiscountPage from "./user/main/discountPage"
import HistoryPage from "./user/main/historyPage"

ReactDOM.render(<Router history={hashHistory}>
	  		
    <Route path="/" component={IndexPage}  />
	<Route path="list" component={ListPage}  />
	<Route path="detail(/:goodsID)" component={DetailPage}  />
	<Route path="information(/:goodsID)" component={Information}  />
	<Route path="cart" component={CartPage}  />
	<Route path="login" component={LoginPage}  />
	<Route path="register" component={RegisterPage}  />
	<Route path="more" component={MorePage}  />
	<Route path="confirm" component={ConfirmPage}  />
	<Route path="change" component={ChangePage}  />
	<Route path="show" component={ShowPage}  />
	<Route path="feedback" component={FeedbackPage}  />
	<Route path="myorder" component={OrderListPage}  />
	<Route path="about" component={AboutPage}  />
	<Route path="collection" component={CollectionPage}  />
	<Route path="discount" component={DiscountPage}  />
	<Route path="history" component={HistoryPage}  />
	
</Router>,document.getElementById("root"));

