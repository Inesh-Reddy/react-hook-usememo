import { useState, useMemo } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  // const [count, setCount] = useState(0);
  // optimal solution: only renders when inputvalue dependency changes [inputvalue render will happen sequentially]
  let count = useMemo(()=>{
    let finalCount=0;
    for(let i=1; i<=inputValue; i++){
      finalCount = finalCount+i;
    }
    return finalCount;
  }, [inputValue])

  // most used, less optimal solution:[2 renders will happen 1-> inputValue render, 2-> count render]

  // useEffect(()=>{
  //     let finalCount =0;
  //     for (let i = 1; i <= inputValue; i++) {
  //         finalCount = finalCount + i;
  //     }
  //     setCount(finalCount);
  // },[inputValue])


  //ugly solution: renders all the time(even if the inputvalue doesn't chage)
  // let count = 0;
  // for (let i = 1; i <= inputValue; i++) {
  //   count = count + i;
  // }

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;




//another approach 
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//   let [final, setFinal] = useState(0)

//   function counter(){
//     setCount(count+1);
//   }
//   function handleInputChange(event){
//     let n = event.target.value;
//     sum(n);
//     // return n;
    
//   }
//   function sum(n){
//     console.log("Iam getting called e..only when counter is clicked")
//     final =0;
//     for(let i=1; i<=n; i++){
//       final = final+i;
//     }
//     setFinal(final);
//   }

//   return (
//     <div>
//       <input type="text" placeholder='Number(n)' onChange={handleInputChange} /><br />
//       <h1>Sum is {final}</h1><br />
//       <button onClick={counter} >counter ({count})</button><br />
//     </div>
//   )
// }

// export default App

