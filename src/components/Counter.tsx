import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>You clicked {counter} times</h1>
            <button onClick={increment}>Click me</button>
        </div>
    );
}

export default Counter;
