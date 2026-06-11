import React, { useState } from 'react'

function EventHandling() {
    const [count,setCount] = useState(0);

    function handleIncrement(){
        setCount(count+1);
    }

    function handleReset(){
        setCount(0);
    }

  return (
    <div>
        <p>Count is: {count}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default EventHandling
