import { useNavigate } from '@solidjs/router';
import Button from '@suid/material/Button';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={[navigate, '/']} variant="contained" color="primary">
        Home
      </Button>
      <Button
        onClick={[navigate, 'savedrepos']}
        variant="contained"
        color="secondary"
      >
        Saved
      </Button>
    </>
  );
};

{
  /* <Button variant="contained" color="primary">Home</Button> */
}
{
  /* <Button variant="contained" color="secondary">Saved</Button> */
}
export default Nav;
