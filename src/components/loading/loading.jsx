import React from 'react'


import './loading.scss'
const Loading = () => {
  return (
	<div style={{width: '100%', height: '100vh', display: "flex", alignItems: "center", justifyContent: 'center'}}>
		<div class="lds-circle"><div></div></div>
	</div>
  )
}

export default Loading