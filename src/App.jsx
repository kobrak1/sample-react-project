import { useState } from "react";

// display component
const Display = ({counter}) => <div> {counter} </div>

// button component
const Button = ({eventFunc, btnName}) => <button onClick={eventFunc}> {btnName} </button>

const App = () => {
  const [counter, setCounter] = useState(0);

  // functions declared
  const plus = () => setCounter(counter + 1);
  const minus = () => setCounter(counter - 1);
  const reset = () => setCounter(0)

  return (
    <>
      <Display counter={counter} />
      <Button eventFunc={plus} btnName={"+"} />
      <Button eventFunc={minus} btnName={"-"} />
      <Button eventFunc={reset} btnName={"Reset"} />
    </>
  )
}

export default App;