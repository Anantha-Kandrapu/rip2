import './App.css';
import { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Redirect } from 'react-router-dom'

function Page3() {
  const count = useRef(0);
  const navigate = useNavigate();
  const [currCount, setCount] = useState(count);

  return (
    <div className='App'>
      <h2> Welcome to Page 3</h2>
      <button onClick={() => { count.current++; console.log(count); setCount(count.current) }}> Hey Add </button>
      <button onClick={() => { count.current--; console.log(count); setCount(count.current) }}> Hey Minus </button>
      <h2 data-testid='madCount'>count : {count.current}</h2>
      <button data-testid='goBackP2' onClick={() => navigate('/Page2')} >go to P2</button>
    </div>
  )
}
function Page2() {
  const count = useRef(0);
  const navigate = useNavigate();
  const [currCount, setCount] = useState(count);

  return (
    <div className='App'>
      <h2> Welcome to Page 2</h2>
      <button onClick={() => { count.current++; console.log(count); setCount(count.current) }}> Hey Add </button>
      <button onClick={() => { count.current--; console.log(count); setCount(count.current) }}> Hey Minus </button>
      <h2 data-testid='madCount'>count : {count.current}</h2>
      <button data-testid='goToP3' onClick={() => navigate('/Page3')}>go to P3</button>
      <button data-testid='goBackP1' onClick={() => navigate('/')} >go to P1</button>
    </div>
  )
}
function Page1() {
  const count = useRef(0);
  const [currCount, setCount] = useState(count);
  const navigate = useNavigate();

  return (
    <div className="App">
      <h2>wambam This is page 1</h2>
      <button onClick={() => { count.current++; console.log(count); setCount(count.current) }}> Hey Add </button>
      <button onClick={() => { count.current--; console.log(count); setCount(count.current) }}> Hey Minus </button>
      <h2 data-testid='madCount'>count : {count.current}</h2>
      <button data-testid='goToP2' onClick={() => navigate('/Page2')}>go to P2</button>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Page1></Page1>}></Route>
        <Route path='/Page2' element={<Page2></Page2>}></Route>
        <Route path='/Page3' element={<Page3></Page3>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
