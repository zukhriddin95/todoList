import React, { Fragment } from 'react'
import { AiFillCodepenCircle } from "react-icons/ai"
import { BsFileEarmarkPost } from "react-icons/bs"
import { FaComments, FaPhotoVideo } from "react-icons/fa"
import { FaUsersLine } from "react-icons/fa6"
import { GrTasks } from "react-icons/gr"



import { NavLink } from 'react-router-dom'
import './sidebar.scss'
const Sidebar = ({isMobile}) => {
	console.log(isMobile);
  return (
	<Fragment>
		<div className=''>
			<div className={isMobile ? 'nav1' :'nav'}>
			<h3 className='nav__title'>
				{!isMobile && 'Todos Sidebar'}
			</h3>
		 <div className={isMobile ? 'nav__list1' :'nav__list'}>
		  	<NavLink to='/' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><GrTasks className='nav__list__item__icons' />{!isMobile &&  'Todos'}</NavLink>
		  	<NavLink to='/posts' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><BsFileEarmarkPost className= 'nav__list__item__icons'/>{!isMobile && 'Posts'}</NavLink>
		  	<NavLink to='/comments' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><FaComments className='nav__list__item__icons' />{!isMobile && 'Comments'}</NavLink>
		  	<NavLink to='/users' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><FaUsersLine className='nav__list__item__icons' />{!isMobile && 'Users'}</NavLink>
		  	<NavLink to='/photos' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><FaPhotoVideo className='nav__list__item__icons' />{!isMobile && 'Photos'}</NavLink>
		  	<NavLink to='/albums' className={isMobile ? 'nav__list__item1' :'nav__list__item'}><AiFillCodepenCircle className='nav__list__item__icons' />{!isMobile && 'Albums'}</NavLink>
		 </div>	
		</div>	
		</div>
		
		
	</Fragment>
  )
}

export default Sidebar