import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote} from './';


export const MultiplesCustomHooks = () => {
const { counter, increment } = useCounter(1);
const { data, isLoading, hasError } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
const { author, quote } = !!data && data[0];

//console.log( data, isLoading, hasError );

  return (
    <>
        <h1>BreakindBad Quotes</h1>
        <hr />

        {
            isLoading
            ? <LoadingQuote />
            : <Quote author={ author } quote={quote}/>
        } 

        <button className="btn btn-primary" 
        disabled={ isLoading }
        onClick={ () => increment() }
        >
            Next quote
        </button>

    </>
    
  )
}
