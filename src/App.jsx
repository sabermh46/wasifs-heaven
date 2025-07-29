
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { increment } from './redux/exampleSlice';

function App() {

  const incrementCount = useSelector(state => state.example.count);
  const dispatch = useDispatch();

  return (
    <>
      Hello
      <p>Welcome to Wasif's Heaven</p>
      <p>Enjoy your stay!</p>
      <p>Powered by React and Redux</p>
      <div>
        <p>Count: {incrementCount}</p>
      </div>
      <button onClick={()=>dispatch(increment())} className="bg-primary text-text p-2 rounded hover:bg-primary-hover">
        Increment +
      </button>
    </>
  )
}

export default App
