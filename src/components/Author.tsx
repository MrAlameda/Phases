import Phases from "../quotes.json"

interface Props{
    quote:number
}

const Author=({quote}:Props)=>{
    const styles={
        color:`#${quote+150}`
    }
    
    return(
        <section
            style={styles}
            className="author">
            - {Phases[quote].author}
        </section>
    ) 
}

export default Author