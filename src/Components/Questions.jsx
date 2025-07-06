import { useState, useEffect } from 'react';

function Questions({ temp, click }) {
	const [show, setShow] = useState(click ? [] : null);

	useEffect(() => {
		setShow(click ? [] : null);
	}, [click]);

	const handleClick = (idx) => {
		if (click) {
			setShow((prev) => {
				const newShow = [...prev];
				newShow[idx] = !newShow[idx];
				return newShow;
			});
		} else {
			setShow((prev) => (prev === idx ? null : idx));
		}
	};

	return (
		<div>
			{temp.map((p, idx) => (
				<div key={p.id}>
					<button onClick={() => handleClick(idx)}>
						{p.question}
					</button>
					{(click ? show[idx] : show === idx) && <div>{p.answer}</div>}
				</div>
			))}
		</div>
	);
}
export default Questions;