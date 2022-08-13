import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // useCallback sirve para memorizar funciones
    const incrementFather = useCallback(
        (value) => {
            setCounter( (c) => c + value );  
            
            // toma el nuevo valor del state y le suma uno 
            //y lo muestra, pero como el valor de la función lo memoriza el callback 
            // no vuelve a generar 
        },
        [],
    )


    useEffect(() => {
        //incrementFather();
    }, [incrementFather])


    // const incrementFather = () => {
    //     setCounter( counter + 1 )
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />

            <ShowIncrement increment={ incrementFather }/>
    </>
  )
}
