import { Router } from '@solidjs/router';
import { render } from 'solid-js/web';

import App from './App';
import './index.css';
import { StoreProvider } from './store-provider';

render(() => (
    <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    , document.getElementById('root')!);
