import { useEffect, useState } from "react"
import { Message } from "./Message";




export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'jamer@google.com'
    });

const { username, email } = formState; 

const onInputChange = ({ target }) => {
   // console.log(event.target.value)
   const { name, value } = target;
   //console.log({ name, value })
   setFormState({
    ...formState,
    [ name ]: value  // [ ]: propiedades computadas
   });
}

useEffect(() => {
    //console.log('FormState change!!');
}, [formState]);  // un arreglo vacío solo llama una vez la función


useEffect(() => {
   // console.log('email change!!');
}, [ email ]);  // muestra cuando cambia el estados del email


  return (
    <>
        <h1>SimpleForm</h1>

        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input 
            type="text" 
            className="form-control mt-2"
            placeholder="jamer@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

            {
                (username === 'strider2') && <Message />
            }
        
    </>
  )
}
