import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import App from './App';
import './index.css';

render(() => (
    <Router>
        <App />
    </Router>)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    , document.getElementById('root')!);
