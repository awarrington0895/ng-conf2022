import { Component, createEffect, For } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Checklist as IChecklist } from './checklist';
import * as api from './checklist.api';

const initialChecklist: IChecklist = {
  id: '',
  name: '',
  tasks: [],
};

export const Checklist: Component<{ id: string }> = (props) => {
  createEffect(async () => {
    const checklist = await api.get(props.id);

    setChecklist(checklist);
  });

  const completeTask = (id: string) => {
    setChecklist('tasks', (tasks) => tasks.filter((task) => task.id !== id));
  };

  const [checklist, setChecklist] = createStore(initialChecklist);

  return (
    <section class="checklist">
      <h1>
        <span>{checklist.name}</span>
      </h1>
      <div>
        <For each={checklist.tasks}>
          {(task) => (
            <article class="task">
              <h2>{task.name}</h2>
              <button onClick={[completeTask, task.id]} class="answer-button">
                Done
              </button>
            </article>
          )}
        </For>
      </div>
    </section>
  );
};
