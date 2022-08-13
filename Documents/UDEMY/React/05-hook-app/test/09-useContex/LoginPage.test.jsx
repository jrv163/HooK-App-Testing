const { render, screen, fireEvent } = require("@testing-library/react")
const { UserContext } = require("../../src/09-useContext/context/UserContex")
const { LoginPage } = require("../../src/09-useContext/LoginPage")


describe('Pruebas en <LoginPage />', () => { 
 

    test('debe mostrar el componente sin el usuario', () => { 

        render(  
        <UserContext.Provider value={{ user: null }}>
            <LoginPage />
        </UserContext.Provider>
         );

         const preTag = screen.getByLabelText('pre');
         expect( preTag.innerHTML ).toBe('null');


     })

     test('debe de llamar al setUser cuando se le de click', () => { 

    const setUserMock = jest.fn();
    
        render(  
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
             );

             const button = screen.getByRole('button');
             fireEvent.click( button );
     
             expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"}); 
    })
 })