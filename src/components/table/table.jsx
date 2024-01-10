import React, { Fragment, useState } from 'react'
import { MdDeleteSweep } from "react-icons/md"
import { RiEditCircleFill } from "react-icons/ri"


import { GrClose } from 'react-icons/gr'
import './table.scss'
import { toast } from 'react-toastify'
const Table = ({currentTodos, query, handleDelete, editTodos, setTodos, todos}) => {
	const [editedText, setEditedText] = useState('');
	const [editModal, setEditModal] = useState(false);
	const [selected, setSelected] = useState(null)

	const editOpen = (todos) => {
		setEditedText(todos.title);
		editTodos(todos.id);
		setSelected(todos.id);
		setEditModal(true);
	  };

	  const handleSave = (e) => {
		e.preventDefault();
		const updatedTodos = todos.map((todo) => {
		  if (todo.id === selected) {
			return { ...todo, title: editedText };
		  }
		  return todo;
		});
		setEditedText('');
		setEditModal(false);
		setTodos(updatedTodos);
		toast.success('Updated todos successfully')
	  };
	  
	const EditClose  = () => {
		setEditModal(false)
		
	}

  return (
	<Fragment>
		<div className='table'>
		  <div className='table__header'>
			<h3>N#</h3>
			<h3>title</h3>
			<h3>completed</h3>
			<h3>actions</h3>
		  </div>
			{currentTodos?.filter((pr) => pr.title.toLowerCase().includes(query)).map((el, i) => (
		  <div key={i} className='table__contents'>
				<h3>{el.id}</h3>
				<h3>{el.title}</h3>
				<h3>{el.completed ? "bajarilgan" : 'bajarilmagan'}</h3>
				<div className='table__contents__btns'>
					<button onClick={() => editOpen(el)} ><RiEditCircleFill style={{color: 'blue'}} className='i' /></button>
					<button onClick={() => handleDelete(el.id)}><MdDeleteSweep style={{color: 'red'}} className='i' /></button>
				</div>
		  </div>
			))}
			{editModal && (
				 <div className='modalback'>
				<div className='modal'>
				<div className='modal__header'><h3>Save Todos</h3> <button onClick={EditClose}><GrClose className='close' /></button> </div>
				<div className='modal__contents'>
					<form>				
						<input value={editedText} onChange={(e) => setEditedText(e.target.value)} type='text' placeholder='title ...' />
						<button onClick={(e) => handleSave(e)}>Save Todos</button>
					</form>
				</div>
				<div className='modal__footer'>
					<h3>2024 Todo list</h3>
				</div>
			</div>
			</div>
			)}
		</div>
	</Fragment>
 
  )
}

export default Table
