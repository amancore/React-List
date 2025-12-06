import PaginationComp from "./Components/PaginationComp"
import { useState } from "react";
const Pagination = () => {
	const dummyObject = []
	for (let i = 1; i <= 100; i++) {
		dummyObject.push({
			id: i,
			name: `products ${i}`
		});
	}

	const itemPerPage = 10;   // total items i have to show on the current page 
	const [currentPage, setCurrentPage] = useState(1);  // this is the current page number 
	const lastIdx = currentPage * itemPerPage // 1* 10=> total 10 idxes
	const firstIdx = lastIdx - itemPerPage // 10 - 10 => 0 
	const currentItems = dummyObject.slice(firstIdx, lastIdx) // returns the items from a to  b-1
	// 0 to 9 [products 1 to products 10]
	console.log("first ", firstIdx, lastIdx)
	return (
		<div>
			{
				currentItems.map(item => (
					<div key={item.id}>
						<p>{item.name}</p>
					</div>
				))
			}
			<PaginationComp currentPage={currentPage} totalPages={Math.ceil(dummyObject.length / itemPerPage)} onPageChange={(e) => setCurrentPage(e)} />
		</div>
	)
}

export default Pagination

// Parent(Pagination)
// Stores data
// Cuts it into pages
// Shows only items for the current page
// Sends page change function to child

// Child(PaginationComp)
// Shows buttons
// Calls parent when page changes