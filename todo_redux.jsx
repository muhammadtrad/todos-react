import React from 'react';
import ReactDOM from 'react-dom';
import Root from './frontend/components/root';
import configureStore from './frontend/store/store';
import { receiveTodo, receiveTodos} from './frontend/actions/todo_actions'


document.addEventListener("DOMContentLoaded", ()=> {
    const store = configureStore();
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
    window.store = store;
    window.receiveTodo  = receiveTodo;
    window.receiveTodos = receiveTodos;
});

