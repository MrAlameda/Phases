import Phases from "../quotes.json"

interface Props{
    title:number
}

const Frase=({title}:Props)=>{
    const styles={
        color:`#${title+150}`
    }
    
    return(
        <section 
            style={styles}
            className={`${title+100}`}>
                "{Phases[title].quote}""
        </section>
    )
}

export default Frase