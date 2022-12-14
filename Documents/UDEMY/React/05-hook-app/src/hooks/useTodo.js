import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {


const [ todos, dispatchTodo ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));  // solo se graban strings
    }, [todos])


const handleNewTodo = ( todo ) => {
    //console.log({ todo });
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }
   dispatchTodo( action );
}

const handleDeleteTodo = ( id ) => {
    console.log({ id });
    dispatchTodo({
        type: '[TODO] Remove Todo',
        payload: id,
    })
    
}

const handleToggleTodo = ( id ) => {
    console.log({ id })
    dispatchTodo({
        type: '[TODO] Toggle Todo',
        payload: id,
    })

}


  return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done).length,
  }
}
