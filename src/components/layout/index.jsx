import { useMediaQuery } from '@uidotdev/usehooks'
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'


import Sidebar from '../sidebar/sidebar'
import './layout.scss'
const Layout = () => {
	const isMobile = useMediaQuery('(max-width: 770px)')

	

	return <Fragment>
		<div className='container'>
			<div className='sidebar'>
				<div className={` sidebar__wrapper ${isMobile &&'sidebar__wrapper1' } `}>
				<Sidebar isMobile={isMobile} />
			</div>		
				<div className='outlet'><Outlet /></div>
			</div>
			
		</div>
	</Fragment>
}

export default Layout
