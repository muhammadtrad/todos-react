export const RECEIVE_TODOS = "RECEIVE TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = todos => ({
    type: RECEIVE_TODOS,
    todos
});

export const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo
});