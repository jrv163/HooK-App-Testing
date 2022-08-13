const { renderHook } = require("@testing-library/react");
const { useCounter } = require("../src/hooks/useCounter");


describe('Pruebas en el UseCounter', () => {  
    test('debe retornar los valores por defecto', () => {  

        const { result } = renderHook( () => useCounter() );
         const {increment, decrement, counter, reset} = result.current;

         expect( counter ).toBe(100);
         expect( decrement ).toEqual( expect.any( Function ) );
         expect( increment ).toEqual( expect.any( Function ) );
         expect( reset ).toEqual( expect.any( Function ) );

    });

    test(' debe de generar el counter con el valor de 100', () => {  

        const { result } = renderHook( () => useCounter(100) );
        expect( result.current.counter ).toBe( 100 );
    })
})