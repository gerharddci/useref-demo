// 1. import hooks
import { useState, useRef } from 'react';
import './App.css';

// function App() {
//   // 2. call useRef in your component; store the object that useRef() returns in a variable
//   const ref = useRef(0); // { current: 0 }
//   console.log('render');
//   console.log(ref.current);

//   function handleClick() {
//     // 3. access the ref object's current property in your code
//     ref.current = ref.current + 1;
//     alert(`You clicked ${ref.current} times`);
//   }

//   return (
//     <div className="App">
//       <h1>You clicked {ref.current} times.</h1>
//       <button onClick={handleClick}>Click me!</button>
//     </div>
//   );
// }

// There are 2 use cases for the useRef hook:
// 1. storing a value that is not needed in renders
// 2. directly modifying a DOM element

// 1. storing a value not needed in renders

// let intervalId;


function App() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStart(Date.now() - (now - start));
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(function() {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0;
  if (start !== null && now !== null) {
    secondsPassed = (now - start) / 1000;
  }
  return (
    <div className="App">
      <h1>Number of seconds passed: {secondsPassed}</h1>
      <button onClick={handleStart}>Start/Resume</button>
      <button onClick={handleStop}>Stop/Pause</button>
    </div>
  )
}

// 2. directly modifying a DOM element
// function App() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>Focus the input</button>
//     </div>
//   )
// }


export default App;
