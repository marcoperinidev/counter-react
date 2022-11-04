import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body my-3 ">
            <h1>Counter App</h1>
            <div className="my-5">
              <h2 className='my-5'>{count}</h2>
              <button className="btn btn-primary mx-3" onClick={() => setCount(count + 1)}>Increment</button>
              <button className="btn btn-warning mx-3" onClick={() => setCount(count - 1)} disabled = {count === 0}>Decrement</button>
              <button className="btn btn-danger  mx-3"  onClick={() => setCount(0)} disabled = {count === 0}>Reset</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
