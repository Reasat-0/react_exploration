import { useState } from "react";


function Todo(e){

    const [todo,setTodo] = useState('');
    const [warning,setWarning] = useState(null)

    const handleInput = (e) => {
        let inputVal = e.target.value;
        let updatedWarning = inputVal.includes('js') ? 'Learn JS first' : null

        setTodo(inputVal)
        setWarning(updatedWarning)
        
    }
    return (
        <>
            <p> {todo} </p>

            <textarea type={'text'} onChange={handleInput}/>

            <h3> {warning || 'Good Choice'} </h3>
        </>
    )
}

export default Todo;