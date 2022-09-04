import Button from '@suid/material/Button';
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
      <Button
        sx={{ marginRight: '1rem', marginLeft: '0.25rem' }}
        variant="outlined"
        onClick={[adjust, -1]}
      >
        Previous
      </Button>
      <Button variant="outlined" onClick={[adjust, 1]}>
        Next
      </Button>
    </>
  );
};
