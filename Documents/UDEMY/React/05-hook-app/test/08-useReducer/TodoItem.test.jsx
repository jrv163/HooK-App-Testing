import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";


describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del Alma',
        done: false,
    }

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

        test('debe mostrar el todo pendiente', () => { 

            render( 
                <TodoItem todo={ todo } 
                onToggleTodo={ onDeleteTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
                /> 
            );

            const liElement = screen.getByRole('listitem');
            //console.log(liElement.innerHTML);
            expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
            
            const spanElement = screen.getByLabelText('span');

            expect( spanElement.className ).toContain('align-self-center');
            expect( spanElement.className ).not.toContain('text-decoration-line-through');
            
            //screen.debug();
     })

     test('debe mostrar el todo completado ', () => {

        todo.done = true;

        render( 
            <TodoItem todo={ todo } 
            onToggleTodo={ onDeleteTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');
        
        //screen.debug();
 
        
     })

     test('span debe de llamar el ToggleTodo cuando se hace click', () => { 

        render( 
            <TodoItem todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( 1 );


      })

      test('span debe de llamar el deleteTodo cuando se hace click', () => { 

        render( 
            <TodoItem todo={ todo } 
            onToggleTodo={ onToggleTodoMock } 
            onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );

        const deleteButton = screen.getByLabelText('button');
        //const deleteButton = screen.getByRole('button'); // sin el aria-label='button' 
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );


      })
     
    
})
