
import Author from "./Author";
import Frase from "./Frase";

interface Props{
    index:number
}

function QuoteBox({index}:Props) {

    return ( 
        <section className="QuoteBox">
            <Frase
                title={index}
            />
            <Author
                quote={index}
            />
        </section>
     );
}

export default QuoteBox;