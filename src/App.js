import { useState } from 'react';

function App() {
  // State to store the count value
  const [count, setCount] = useState(0);

  // Functions to handle increment and decrement
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
