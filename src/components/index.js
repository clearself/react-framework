'use strict';
import React, { Component } from 'react';
import { Router, Route, hashHistory, browserHistory, Link, useRouterHistory} from 'react-router';

/*
三种history管理
1、hashHistory（react默认），带有hash值和随机字符串?_k=xxxxx /#/user/haishanh?_k=adseis
2、browserHistory 以文件路径方式显示 /user/haishanh
3、useRouterHistory 去掉hashHistory随机字符串?_k=xxxxx
*/

// 去掉hashHistory随机字符串?_k=xxxxx
import { createHashHistory } from 'history';
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import First from './First.js'
import Second from './Second.js'

// 组件
const Home  = () => <div><Nav/><First/></div>
const About  = () => <div><Nav/><Second/></div>

// Nav Links
const Nav = () => <div>
    <nav style={{margin:'20px'}}>
      <Link style={{margin:'10px'}} to="/" activeStyle={{color: 'red'}}>Home</Link>
      <Link style={{margin:'10px'}} to="/second" activeStyle={{color: 'red'}}>About</Link>
    </nav>
</div>

export default class MainComponent extends Component{
    render(){
        return (
          <Router history={appHistory}>
            <Route path='/' component={Home}/>
            <Route path='/second' component={About}/>
        </Router>
      )
    }
}