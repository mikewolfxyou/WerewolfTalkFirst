import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firstTalkerApp from './reducers/reducers';
import App from './components/App';

const Store = createStore(firstTalkerApp);
// console.log(Store.getState());
// Store.subscribe(() =>
//     console.log(Store.getState())
// );
render(
    <Provider store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

export default Store;
