import { Component, createSignal } from 'solid-js';
import { Checklist } from './Checklist';

export const ChecklistSwitcher: Component = () => {
  const [counter, setCounter] = createSignal(1);

  const adjust = (amount: number) => {
    setCounter(counter() + amount);
  };

  return (
    <>
      <Checklist id={counter().toString()} />
      <button onClick={[adjust, -1]}>Previous</button>
      <button onClick={[adjust, 1]}>Next</button>
    </>
  );
};
