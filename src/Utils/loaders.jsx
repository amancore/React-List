
export async function jobsLoader() {
	const res = await fetch('http://localhost:5000/jobs'); // use correct protocol and port
	if (!res.ok) {
		throw new Error('Failed to fetch jobs');
	}
	return res.json();
} 

export async function jobDetailsLoader({ params }) {
	const { id } = params;
	const res = await fetch("http://localhost:5000/jobs/" + id);
	if(!res.ok) {
		throw new Error('Could not found the Job List');
	}
	return res.json();

}
/* rules: {
	'react-refresh/only-export-components': 'off'
}
 */