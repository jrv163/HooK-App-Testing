const { render, screen, fireEvent } = require("@testing-library/react");
const { MultiplesCustomHooks } = require("../../src/03-examples");
const { useCounter } = require("../../src/hooks/useCounter");
const { useFetch } = require("../../src/hooks/useFetch");

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Prubas en <MultipleCustomHooks />', () => {
    
     const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
             counter: 1,
             increment: mockIncrement
         });

         beforeEach( () => { // limpiamos las pruebas 
                // o reseteamos las pruebas a su estado inicial

            jest.clearAllMocks();
         })

    test('debe de mostra el componente por defecto ', () => {
        
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultiplesCustomHooks /> );

        expect( screen.getByText('Looading...'))
        expect( screen.getByText('BreakindBad Quotes') )

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeTruthy();

        //screen.debug();

    })
    
    test('debe mostrar un Quote ', () => {

        useFetch.mockReturnValue({
            data: [{ author:'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultiplesCustomHooks /> );
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();

        //screen.debug();
    })

    test('debe retornar la función de incrementar ', () => {


        useFetch.mockReturnValue({
            data: [{ author:'Fernando', quote: 'Hola Mundo' }],
            isLoading: false,
            hasError: null
        });

         
        render( <MultiplesCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );
        
        expect( mockIncrement ).toHaveBeenCalled();
    })
    
})
