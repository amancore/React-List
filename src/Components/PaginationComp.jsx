function PaginationComp({ currentPage, totalPages=10, onPageChange }) {
	function generateNoOfPage() {
		const page = []
		for (let i = 1; i <= totalPages; i++) {
			page.push(i);
		}
		return page;
	}

	//  this is usually use to display the page numbers
	return (
		<div>
			<button onClick={()=> onPageChange(currentPage -1)} className="border-2 w-15 cursor-pointer" disabled={currentPage === 1}>prev</button>
			{
				generateNoOfPage().map((p) => (
					<button onClick={()=> onPageChange(p)} key={p} className="m-10 px-10 border-2 w-10 cursor-pointer">{p}</button>
				))
			}
			<button onClick={()=> onPageChange(currentPage + 1)} className="border-2 w-15 cursor-pointer" disabled={currentPage === totalPages}>next</button>
		</div>
	)
}
export default PaginationComp



