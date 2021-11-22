import React, { useEffect, useState } from 'react'
import Child from '../child/Child';

function App() {
  // The useState hook creates a new piece of state and a function for updating that state
  // You can provide an initial value for this new piece of state
  // Using the useState hook can look like this:
  // const [state, setState] = useState(initialValue);
  // const [number, setNumber] = useState(0);
  // const [word, setWord] = useState('');
  // const [hungry, setHungry] = useState(false);
  // const [list, setList] = useState([]);
  // const [item, setItem] = useState({});

  // State is often created with an empty or falsy value (as above), but it can also
  // be initialized with filled out or truthy values too:
  // const [myAge, setMyAge] = useState(43);
  // const [myState, setMyState] = useState('Oregon');
  // const [animal, setAnimal] = useState({ species: '', habitats: [] });
  // const [cat, setCat] = useState({ name: 'Whiskers', age: 4 });

  // Variables can be used to initialize state too. The last example above could
  // also be created by placing the data for the intial value in a variable that
  // is then passed into useState:
  // const myCat = { name: 'Whiskers', age: 4 }
  // const [cat, setCat] = useState(myCat);

  const [numberOne, setNumberOne] = useState(0);
  // const [numberTwo, setNumberTwo] = useState(5);
  const [result, setResult] = useState(0);
  // const [word, setWord] = useState('First');

  const numberTwo = 5;
  const word = 'First';

  const onNumberIncrease = () => {

    // This first approach will directly change/mutate the numberOne state:
    //
    // setNumberOne(numberOne + 1);

    // This second approach seems to be the more standard way to update the
    // state of numbers by getting the previous state and updating that:
    //
    setNumberOne(prevState => prevState + 1);
  };

  const onNumberDecrease = () => {
    setNumberOne(prevState => prevState - 1);
  };

  const addNumbers = () => {
    
    // This is similar to the first approach used in onNumberIncrease, but
    // perhaps the difference is that I'm not directly changing/mutating the
    // state because I'm not directly reassigning the value of "result".
    // Also, to be honest, I don't have a great understanding of why we
    // want to avoid directly mutating state.
    //
    setResult(numberOne + numberTwo);

    // Directly mutating/reassiging "result" might look like this:
    // (this code won't work, so it's just visualize the difference):
    //
    // setResult(result = numberOne + numberTwo);

    // This is similar to the second approach used in onNumberIncrease,
    // and this will work. I changed the variable name from prevState to
    // currentState because that sounded more accurate in this example,
    // but the variable for the previous/current state can be called anything.
    // And again, I don't directly use the "result" state here:
    //
    // setResult(currentState => {
    //   currentState = numberOne + numberTwo
    //   return currentState
    // });

  };

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
