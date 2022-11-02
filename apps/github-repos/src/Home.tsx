import Box from '@suid/material/Box';
import { state } from './state';
import UsernameForm from './UsernameForm';

const Home = () => {
  return (
    <Box sx={{ marginTop: '1rem' }}>
      <UsernameForm />
      Github repos for {state.username}
    </Box>
  );
};

export default Home;
