import { renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {  

    const initialForm = {
        name: 'Jamer',
        email: 'jamer@google.com'
    }

    test('debe de retornar los valores por defecto', () => {  

        const { result } = renderHook( () => useForm(initialForm) );
        expect( result.current ).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
          })
    })
})