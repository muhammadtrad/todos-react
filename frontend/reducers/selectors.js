//takes in the current state as an argument (object)
//and turns it into an array.
export const allTodos = ({ todos }) => {
   
   let keys =  Object.keys(todos);
   let todoId = keys.map( (id) => {
       return todos[id];
   });
   return todoId;

};

export const stepsByTodoId = ( { steps }, todo_id) => {
    const stepsByTodoId = [];
    Object.keys(steps).forEach(stepId => {
        const step = steps[stepId];
        if (steps[stepId].todo_id === todo_id){
            stepsByTodoId.push(step);
        }
        
    })
    return stepsByTodoId;
};
