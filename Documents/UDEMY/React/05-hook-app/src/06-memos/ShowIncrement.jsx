import React from "react";

export const ShowIncrement = React.memo( ({ increment }) => {

    console.log(' me volví a generar :(' ); 

  return (
    <button
    className="btn btn-primary"
    onClick={ () => {
        increment( 5 ); 
    }}
    >
    incrementar
    </button>
  )
})
