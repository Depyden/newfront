import React from 'react'
import './styles/info.css'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'

const Adult = () => (
	<div>
		<Breadcrumb style={{ margin: '16px 0' }}>
      		<Breadcrumb.Item>Global Horizons</Breadcrumb.Item>
			<Breadcrumb.Item>
        		<NavLink to="/" className="nav-text">Home</NavLink>
      		</Breadcrumb.Item>
      		<Breadcrumb.Item>Adult courses</Breadcrumb.Item>
    	</Breadcrumb>
		<div className="site-layout-background" style={{ padding: 25, minHeight: 30 }}>
      		<h1 className="center-text">Adult</h1>
    	</div>
  	</div>
);

export default Adult;