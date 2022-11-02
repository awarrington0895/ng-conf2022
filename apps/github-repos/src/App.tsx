import { Route, Routes } from '@solidjs/router';
import Container from '@suid/material/Container';
import { createEffect } from 'solid-js';
import Home from './Home';
import Nav from './Nav';
import { useStore } from './store-provider';

const App = () => {

  const { state } = useStore();

  createEffect(() => {
    console.log(state.repos);
  });

  return (
    <div>
      <Container sx={{ padding: '1rem' }}>
        <Nav />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="savedrepos" element={<div>Saved Repos Page</div>} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
