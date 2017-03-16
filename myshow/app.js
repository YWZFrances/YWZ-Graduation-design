/**
 * Created by hasee on 2017/1/3.
 */
import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"

import IndexPage from "./product/main/indexPage"
import ListPage from "./product/main/listPage"

ReactDOM.render(<Router history={hashHistory}>
	  		
    <Route path="/" component={IndexPage}  />
	<Route path="list" component={ListPage}  />

</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}