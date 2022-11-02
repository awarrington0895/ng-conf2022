import { gh } from '@ngconf/data-access-github-repos';
import { Route, Routes } from '@solidjs/router';
import Container from '@suid/material/Container';
import { createEffect, createResource } from 'solid-js';
import Home from './Home';
import Nav from './Nav';
import { state } from './state';

const App = () => {
  const [repos] = createResource(() => state.username, gh.getRepos);

  createEffect(() => {
    console.log(repos());
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
