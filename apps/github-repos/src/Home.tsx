import { username } from './state';
import UsernameForm from './UsernameForm';

const Home = () => {
  return (
    <div style={{ 'margin-top': '1rem' }}>
      <UsernameForm />
      Current username is: {username()}
    </div>
  );
};

export default Home;
