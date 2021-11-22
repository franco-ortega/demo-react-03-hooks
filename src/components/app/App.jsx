import React, { useEffect, useState } from 'react';
import Child from '../child/Child';
import styles from './App.module.css';

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


  // click handler to increase numberOne
  const onNumberIncrease = () => {

    // This first approach will directly change/mutate the numberOne state:
    //
    // setNumberOne(numberOne + 1);

    // This second approach seems to be the more standard way to update the
    // state of numbers by getting the previous state and updating that:
    //
    setNumberOne(prevState => prevState + 1);
  };


  // click handler to decrease numberOne
  const onNumberDecrease = () => {
    setNumberOne(prevState => prevState - 1);
  };


  // click handler to add numberOne and numberTwo
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




  // The useEffect hook is a function that takes in two arguments:
  // Arguement #1: callback function
  // Arguement #2 (optional): dependency array
  //
  //
  // These are some simplified looking examples:
  //
  // useEffect(callback)
  // useEffect(callback, dependencyArray)
  // useEffect(() => {})
  // useEffect(() => {}, [])
  // useEffect(() => { *code to run* })
  // useEffect(() => { *code to run* }, [itemOne, itemFive])
  //
  //
  // A slightly more fleshed out useEffect example/template:
  //
  // useEffect(() => {
  //   *code to run*
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


  useEffect(() => {
    // This useEffect takes in a callback function but no dependency array
    // It will run when the page first loads and every time that any state changes
    // The two pieces of state that can change to run this useEffect are:
    // 1. numberOne when the Increase Number or Decrease Number button is clicked
    // 2. result when the Add button is clicked, but only if the result changes

    console.log('Hello, this displays when the page first renders and when any state changes!!')
  })


  useEffect(() => {
    // This useEffect takes in a callback function and an empty dependency array
    // It will only run when the page first loads
    
    console.log('Hola, you see me the first time that the page renders.')
  }, [])


  useEffect(() => {
    // This useEffect takes in a callback function and a dependency array with one item
    // It will run when the page first loads and every time that result changes

    console.log('Howdy, when the page first renders and every time that result changes.')
  }, [result])


  return (
    <div className={styles.App}>
      APP:
      <section>
        <p>Number One: {numberOne}</p>
        <button onClick={onNumberIncrease}>Increase Number</button>
        <button onClick={onNumberDecrease}>Decrease Number</button>
      </section>

      <section>
        <p>Number Two: {numberTwo}</p>
      </section>

      <section>
        <button onClick={addNumbers}>Add</button>
        <p>Result: {result}</p>
      </section>

      <section>
        <p>Word: {word}</p>
      </section>

        CHILD:
      <section>
        <Child 
          numberOne={numberOne}
          childWord={word}
        />
      </section>

    </div>
  )
}

export default App
