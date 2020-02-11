import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';

import { useTitleInput } from './hooks/useTitleInput';

const App = () => {

  const [name, setName] = useTitleInput('')
  const ref = useRef();

  return (
    <div className="main-wrapper" ref={ref}>
      <h1 onClick={() => ref.current.classList.add('new-fake-class')}>React Hooks Starter</h1>
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
