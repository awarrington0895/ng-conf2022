import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Stack from '@suid/material/Stack';
import TextField from '@suid/material/TextField';
import { createSignal } from 'solid-js';
import { setUsername } from './state';

const UsernameForm = () => {
  const [currentUsername, setCurrentUsername] = createSignal('');

  const updateCurrentUsername = (event: { target: { value: string } }) =>
    setCurrentUsername(event.target.value);

  const submit = (event: Event) => {
    event.preventDefault();

    setUsername(currentUsername());
  };

  return (
    <div>
      <Box onSubmit={submit} component="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={currentUsername()}
            onChange={updateCurrentUsername}
            label="username"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Fetch
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default UsernameForm;
