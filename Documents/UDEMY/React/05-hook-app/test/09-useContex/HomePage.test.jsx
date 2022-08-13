const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/UserContex");
const { HomePage } = require("../../src/09-useContext/HomePage")


describe('Pruebas en <HomePage/>', () => {

    const user = {
        id: 1,
        name: 'Fernando',
    }
    
    test('Debe mostrar el componente SIN el usuario', () => {  

        render( 

        <UserContext.Provider value={{ user: null }}>
            <HomePage /> 
        </UserContext.Provider>

        );
        

        const preTag = screen.getByLabelText('pre') // aria-label
        expect( preTag.innerHTML ).toBe('null');
        //console.log( preTag.innerHTML )
        //screen.debug(); // para saber lo que hay dentro
    })

    test('Debe mostrar el componente CON el usuario', () => {  

        render( 

        <UserContext.Provider value={{ user: user }}>
            <HomePage /> 
        </UserContext.Provider>

        );
        
        const preTag = screen.getByLabelText('pre') // aria-label
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`); // para pasar el número a un string
        //console.log( preTag.innerHTML )
        //screen.debug(); // para saber lo que hay dentro
    })
})
