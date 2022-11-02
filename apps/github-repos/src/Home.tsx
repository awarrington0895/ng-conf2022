import Box from '@suid/material/Box';
import { useStore } from './store-provider';
import UsernameForm from './UsernameForm';

const Home = () => {
  const { state } = useStore();

  return (
    <Box sx={{ marginTop: '1rem' }}>
      <UsernameForm />
      Github repos for {state.username}
    </Box>
  );
};

export default Home;
