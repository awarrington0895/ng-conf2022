import { Component, createResource } from 'solid-js';
import * as api from './checklist.api';

export const Checklist: Component<{ id: string }> = (props) => {
    const [checklist] = createResource(props.id, api.get)

    return (
    <section class="checklist">
      <h1>
        <span>Checklist Name</span>
      </h1>
      <div>
        <article class="task">
          <h2>Task Name</h2>
          <button class="answer-button">Done</button>
        </article>
      </div>
    </section>
  );
};
