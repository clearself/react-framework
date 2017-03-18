
'use strict';
import React from 'react';
import ReactDom from 'react-dom';

//引入组件
import MainComponent from './components/index.js';

//最终渲染
ReactDom.render(
	<div>
		<div style={{color:"red",fontSize:"20px"}}>我是共用页头</div>
		<MainComponent/> 
		<div style={{color:"red",fontSize:"20px",marginTop:'20px'}}>我是共用底部</div>
	</div>,
	document.getElementById('app')
);
