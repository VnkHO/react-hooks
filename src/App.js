import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import Counter from './hooks/Counter'

import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {

  const [name, setName] = useTitleInput('')
  const ref = useRef();

  const reverseWord = word => {
    console.log('reverseWord called')
    return word.split('').reverse().join('');
  }

  const title = 'React Hooks Starter'

  // const TitleReversed = useMemo(() => reverseWord(name), [name]);
  const TitleReversed = useMemo(() => reverseWord(title), [title]);

  return (
    <UserContext.Provider
      value={{
        user: false,
      }}
    >
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add('new-fake-class')}>{TitleReversed}</h1>
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
