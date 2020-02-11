import React, { useState, useEffect } from 'react';
import Toggle from './Toggle';

import { useTitleInput } from './hooks/useTitleInput';

const App = () => {

  const [name, setName] = useTitleInput('')

  return (
    <div className="main-wrapper">
      <h1>React Hooks Starter</h1>
      <div>
        <Toggle />
        <form onSubmit={(event) => {
          event.preventDefault();
        }}>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
