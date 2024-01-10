import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { IoChevronBack } from "react-icons/io5"


import './pagination.scss'
const Pagination = ({ tasksPerPage, totalTasks, paginate, activePage }) => {
	let pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
		pageNumbers.push(i);
	  }

	
	
	return (
		<div className='pagination'>
		  <ul  className='pagination__number'>
		  {pageNumbers.map(page => (
			  <li key={page} onClick={() => paginate(page)} className={ activePage === page ? 'actives' : ''}>{page}</li>
			  ))}
			  </ul>
		</div>
	  
  )
}

export default Pagination