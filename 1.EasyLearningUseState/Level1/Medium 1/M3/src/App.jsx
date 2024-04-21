// Apun ko Har bar kya krna hai ki arr ka last element ko nikal deneke 
// Task is to pop last element of array

import React,{useState} from "react";

const App=()=>{
	
	const [Arr1,setArr1]=useState([0,1,2,3,4,5,6,7,8,9]);
	
	const popper=()=>{
		setArr1(Arr1.filter((item,index)=>{
			return index!=Arr1.length-1;
		}))
	}
	
	return (
	<div>
	{Arr1.map(elem=><h1>{elem}</h1>)}
	<button className="p-3 text-xs bg-sky-900"onClick={popper}>POP_KARO</button>
	</div>
	
	);
	
}

export default App;