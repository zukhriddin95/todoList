import React, { useEffect, useState } from 'react'
import { IoMdAddCircle } from "react-icons/io"
import { request } from '../../server'

import { GrClose } from 'react-icons/gr'
import { toast } from 'react-toastify'
import Loading from '../../components/loading/loading'
import Pagination from '../../components/pagination/pagination'
import Table from '../../components/table/table'
import './todos.scss'

const Todos = () => {
	const [todos, setTodos] = useState([])
	const [newTodos, SetNewTodos] = useState('')
	const [isLoading, setLoading] = useState(false)
	const [query, setQuery] = useState('')
	const [isModal, setModal] = useState(false)
	const [currentPage, setCurrentPage] = useState(1);
	const [tasksPerPage] = useState(10);
	const [activePage, setActivePage] = useState(1);
	const [editedTodos, setEditedTodos] = useState(null);

useEffect(() => {
	getTodos()
},[])




async function getTodos () {
	try {
		setLoading(true)
		const {data} = await request.get('todos')
		setTodos(data)	
	} catch (error) {
		toast.error(error)
	}finally {
		setLoading(false)
	}
}




const openModal = (e) => {
	e.preventDefault()
	setModal(true)
	SetNewTodos('')
}
const handleClose  = () => {
	setModal(false)
}

const addTodos = (e,id) => {
    e.preventDefault()
    if (newTodos) {
		setTodos([...todos, { id: todos.length + 1,  title: newTodos, completed: false }]);
		toast.success('todos added successfully')
	}else {
		toast.error("nothing is written")
	}
    SetNewTodos('');
  };


  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTodos = todos.slice(indexOfFirstTask, indexOfLastTask);

 
  const paginate = (pageNumber) => {
	setActivePage(pageNumber)
	setCurrentPage(pageNumber);
}

const handleDelete = (id) => {
	if(window.confirm('Are you sure you want to delete')) {
		const updatedTasks = todos.filter(todos => todos.id !== id);
    	setTodos(updatedTasks);
	}
    
  };

  const editTodos = (id) => {
    const todosToEdit = todos.find(todos => todos.id === id);
    setEditedTodos(todosToEdit);
  };
  
  return (
	<div className='container'>
		
	  	<div className='main__header'>
		<form className='main__header__form'>
			<input onChange={(e) => setQuery(e.target.value)} type='text' placeholder='search . . .'/>
			<h3>Total: ({todos.length})</h3>
		</form>
		
		<div className='main__header__add' role='button' onClick={
		(e) =>	openModal(e)}>
		< IoMdAddCircle className='i' />	Add Todos
		</div>
	  </div>
	  <div className='contents'>
		<div className='contents__table'>
			{isLoading ? <Loading /> : <Table setTodos={setTodos} editTodos={editTodos} currentTodos={currentTodos} todos={todos} query={query} handleDelete={handleDelete} />}
		</div>
		<div>
			<Pagination activePage={activePage} tasksPerPage={tasksPerPage} totalTasks={todos.length} paginate={paginate}  />
		</div>
	  </div>

	  {isModal && <div className='modalback'>
		<div className='modal'>
			<div className='modal__header'><h3>Todos</h3> <button onClick={handleClose}><GrClose className='close' /></button> </div>
			<div className='modal__contents'>
				<form>				
					<input value={newTodos} onChange={(e) => SetNewTodos(e.target.value)} type='text' placeholder='title ...' />
					<button onClick={(e) => addTodos(e)}>Add Todos</button>
				</form>
			</div>
			<div className='modal__footer'>
				<h3>2024 Todo list</h3>
			</div>
		</div>
		</div>
		}
	 
	  </div>


	
  )
}

export default Todos