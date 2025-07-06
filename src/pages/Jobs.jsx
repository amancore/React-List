import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Jobs() {
	const jobsData = useLoaderData();
	return (
		<div className='jobs' key={jobsData.id}>
			{jobsData.map((job) => (
				<div className='jobs-card'>
					<Link to={job.id.toString()}>
						<h4>{job.title}</h4>
						<p>{job.location}</p>
					</Link>
				</div>
			))}
		</div>
	)
}

export default Jobs;
