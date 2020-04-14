//takes in the current state as an argument (object)
//and turns it into an array.
export const allTodos = ({ todos }) => {
   
   let keys =  Object.keys(todos);
   let todoId = keys.map( (id) => {
       return todos[id];
   });
   return todoId;

};
