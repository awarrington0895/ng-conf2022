import { useNavigate } from '@solidjs/router';
import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={1}>
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
    </Stack>
  );
};

{
  /* <Button variant="contained" color="primary">Home</Button> */
}
{
  /* <Button variant="contained" color="secondary">Saved</Button> */
}
export default Nav;
