// Removing a Odd Elements

import React,{useState} from "react";

const App=()=>{
	
	const [Arr1,setArr1]=useState([0,1,2,3,4,5,6,7,8,9]);
	
	const popperOdd=()=>{
		setArr1(Arr1.filter((element,index)=>{
			return element%2===0;
		}))
	}
	
	return (
	<div>
	{Arr1.map(elem=><h1>{elem}</h1>)}
	<button 
	className="p-3 text-xs bg-sky-900"
	onClick={popperOdd}>POP_KARO</button>
	</div>
	
	);
	
}

export default App;