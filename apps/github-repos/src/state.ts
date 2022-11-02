import { createStore } from "solid-js/store";

interface AppState {
    readonly username: string;
}

const intialState = {
    username: ''
};


const [state, setState] = createStore<AppState>(intialState);

const setUsername = (username: string) => {
    setState('username', username);
}

export { state, setUsername };
