import { useLoaderData } from 'react-router-dom';
function JobDetails() {
	const jobDetails = useLoaderData();
	console.log(jobDetails)
	return (
		<div className='job-details'>
			<p>
				<b>Job Title: </b>{jobDetails.title}
			</p>
			<p>
				<b>Salary: </b> {jobDetails.salary}
			</p>
			<p>
				<b>Location: </b> {jobDetails.location}
			</p>
			<p>
				<b>Description: </b>	Are you passionate about creating innovative solutions that drive business growth? If so, we have an opportunity for you to join our team as a Senior Software Engineer. As a Senior Software Engineer, You will work closely with cross-functional teams to understand requirements, design solutions, and deliver high-quality software products.
			</p>
			<button>Apply Now </button>
		</div>
	);
}
export default JobDetails

