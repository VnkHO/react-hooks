import React, { useState } from 'react';

const App = () => {

  // value and function
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');



  return (
    <div className="main-wrapper">
      <h1>React Hooks Starter</h1>
      <div>
        <h3>{name}</h3>
        <input type="text" onChange={(event) => setName(event.target.value)} value={name} />
      </div>
    </div>
  );
};

export default App;
