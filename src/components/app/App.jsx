import React, { useEffect, useState } from 'react'
import Child from '../child/Child';

function App() {
  const [numberOne, setNumberOne] = useState(0);
  // const [numberTwo, setNumberTwo] = useState(5);
  const [result, setResult] = useState(0);

  const [word, setWord] = useState('First')

  const numberTwo = 5;

  const onNumberIncrease = () => {
    console.log('increase button clicked');
    // setNumberOne(numberOne + 1);
    setNumberOne(prevState => prevState + 1);
  }

  const onNumberDecrease = () => {
    console.log('decrease button clicked');
    // setNumberOne(numberOne - 1);
    setNumberOne(prevState => prevState - 1);
  }

  const addNumbers = () => {
    setResult(numberOne + numberTwo);
  }

  useEffect(() => {
    console.log('The page rendered and when any state changes!!')
    //make fetch call to get Todo data
  })

  useEffect(() => {
    console.log('The first time that the page loads.')
  }, [])

  useEffect(() => {
    console.log('The page rendered and every time that result changes')
  }, [result])


  return (
    <div>
      Number One: {numberOne}
      <button onClick={onNumberIncrease}>Increase Number</button>
      <button onClick={onNumberDecrease}>Decrease Number</button>

      <p>Number Two: {numberTwo}</p>

      <button onClick={addNumbers}>Add</button>
      <p>Result: {result}</p>

      <p>Word: {word}</p>

      CHILD:
      <Child 
        numberOne={numberOne}
        childWord={word}
      />
    </div>
  )
}

export default App
