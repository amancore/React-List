import React from 'react'
import { Outlet } from 'react-router-dom'

function JobsLayout() {
	return (
		<div className='jobs-layout'>
			<h2>Job Openings</h2>
			<p>Explore our latest job openings and join our team!</p>
			<Outlet/>
		</div>
	)
}

export default JobsLayout