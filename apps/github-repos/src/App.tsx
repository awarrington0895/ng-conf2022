import { Route, Routes } from '@solidjs/router';
import Nav from './Nav';

const App = () => (
  <div>
    <Nav />
    <Routes>
      <Route path="/" element={<div>Home page</div>} />
      <Route path="savedrepos" element={<div>Saved Repos Page</div>} />
    </Routes>
  </div>
)

export default App;
