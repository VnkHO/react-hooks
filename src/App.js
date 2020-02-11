import React, { useState, useEffect, useRef, createContext, useMemo } from 'react';
import Toggle from './Toggle';
import Counter from './hooks/Counter'

import { useTitleInput } from './hooks/useTitleInput';

export const UserContext = createContext();

const App = () => {

  const [name, setName] = useTitleInput('')
  const ref = useRef();

  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    console.log('ran')
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes');
    const dishes = await res.json();
    setDishes(dishes)
  }

  useEffect(() => {
    fetchDishes();
  }, [name]);

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
        user: true,
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

          {dishes.map(dish => (
            <article key={dish.name} className="dish-card dish-card--withImage">
              <h3>{dish.name}</h3>
              <p>{dish.desc}</p>
              <div className="ingredients">
                {dish.ingredients.map(ingredient => (
                  <span key={ingredient}>{ingredient}</span>
                ))}
              </div>
            </article>
          ))}

        </div>
      </div>
    </UserContext.Provider >
  );
};

export default App;
