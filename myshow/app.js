/**
 * Created by hasee on 2017/1/3.
 */
import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory,Link} from "react-router"



import YYY from "./product/main/index.js"
import WWW from "./user/main/login.js"
ReactDOM.render(<Router history={hashHistory}>


    <Route path="login" component={WWW}  />


    <Route path="/" component={YYY}  />


</Router>,document.getElementById("root"));

if (module.hot) {
    module.hot.accept();
}