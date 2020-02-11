import React, { useState, useEffect, useRef, createContext } from 'react';
import Toggle from './Toggle';
import Counter from './hooks/Counter'

import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {

  const [name, setName] = useTitleInput('')
  const ref = useRef();

  return (
    <UserContext.Provider
      value={{
        user: false,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>React Hooks Starter</h1>
        <div>
          <Toggle />
          <Counter />
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
    </UserContext.Provider >
  );
};

export default App;
