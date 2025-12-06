// Employee.jsx

function Employee({data}) {
// function Employee(props) {
	const { name, age, position, skills } = data;
	return (
		<div>
			<h5>{` Name : ${name} Age: ${age} Position : ${position} Skills : ${skills} `}</h5>
		</div>
	)
}

export default Employee


