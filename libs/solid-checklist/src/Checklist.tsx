import AppBar from '@suid/material/AppBar';
import Box from '@suid/material/Box';
import Button from '@suid/material/Button';
import Card from '@suid/material/Card';
import CardActions from '@suid/material/CardActions';
import CardContent from '@suid/material/CardContent';
import Toolbar from '@suid/material/Toolbar';
import Typography from '@suid/material/Typography';
import { Component, createEffect, For } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Checklist as IChecklist } from './checklist';
import * as api from './checklist.api';
import { Task } from './task';

const initialChecklist: IChecklist = {
  id: '',
  name: '',
  tasks: [],
};

const ChecklistItem: Component<{
  task: Task;
  completeTask: (id: string) => void;
}> = (props) => {
  return (
    <Card style="margin-bottom: 1rem;">
      <CardContent>
        <Typography variant="h6">{props.task.name}</Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          onClick={[props.completeTask, props.task.id]}
          class="answer-button"
        >
          Done
        </Button>
      </CardActions>
    </Card>
  );
};

export const Checklist: Component<{ id: string }> = (props) => {
  createEffect(async () => {
    const checklist = await api.get(props.id);

    setChecklist(checklist);
  });

  const completeTask = async (id: string) => {
    await api.completeTask(id);
    setChecklist('tasks', (tasks) => tasks.filter((task) => task.id !== id));
  };

  const [checklist, setChecklist] = createStore(initialChecklist);

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: '1rem' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">{checklist.name}</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <section class="checklist">
        <div>
          <For each={checklist.tasks}>
            {(task) => (
              <ChecklistItem task={task} completeTask={completeTask} />
            )}
          </For>
        </div>
      </section>
    </>
  );
};
