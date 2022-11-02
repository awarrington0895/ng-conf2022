import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';
import TextField from '@suid/material/TextField';
import { createSignal } from 'solid-js';

const UsernameForm = () => {
  const [username, setUsername] = createSignal('');

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <TextField
          value={username()}
          onChange={(_, value) => {
            setUsername(value);
          }}
          label="username"
          variant="outlined"
        />
        <Button variant="contained" color="primary">
          Fetch
        </Button>
      </Stack>
    </div>
  );
};

export default UsernameForm;
