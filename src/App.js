import React, { useState } from 'react';
import Toggle from './Toggle';


const App = () => {

  // value and function
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>React Hooks Starter</h1>
      <div>
        <form onSubmit={(event) => {
          event.preventDefault();
          formSubmit(name, setName);
        }}>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
        <Toggle />
      </div>
    </div>
  );
};

const formSubmit = (value, setValue) => {
  console.log(`email sent to ${value} !`)
  setValue('');
}

export default App;
