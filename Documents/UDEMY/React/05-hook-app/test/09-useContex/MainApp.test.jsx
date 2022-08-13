const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/mainApp")


describe('Pruebas en <MainApp />', () => {

    test('debe mostrar el HomePage', () => {  

        render( 
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        
        );

        expect( screen.getByText('Home Page') ).toBeTruthy();
        //screen.debug();

    })

    test('debe mostrar el LoginPage', () => {  

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        
        );

        expect( screen.getByText('Login Page') ).toBeTruthy();
        screen.debug();

    })
    
})
