

export default function Text({addEmoji, addBracket}){
    
    let text = "I am from text of composition";

    if(addEmoji){
        text = addEmoji(text, "$$");
    }

    if(addBracket){
        text = addBracket(text,"{}")
    }
    return (
        
        <>
            
                <p> { text }</p>
            
        </>


    )
}