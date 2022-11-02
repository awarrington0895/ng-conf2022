import { Route, Routes } from '@solidjs/router';
import Container from '@suid/material/Container';
import Home from './Home';
import Nav from './Nav';

const App = () => (
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

export default App;
