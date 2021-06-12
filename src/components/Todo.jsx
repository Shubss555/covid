import react, { useState } from 'react';

const Todo = () => {
    const [input, setinput] = useState('');
    const [note, setnote] = useState([]);

    const addNote = () => {
        if (!input) {

        } else {
            setnote([...note, input]);
            setinput("");
        }
    }

    const deleteNote = (ind) => {
        const updatedata = note.filter((ele, inde) => {
            return inde !== ind;
        })
        setnote(updatedata);
    }
    const alldelete = () => {
        let x = prompt("Are you sure");
        if (x === "yes") {
            setnote([]);
        } else {

        }
    }

    return (
        <>
            <div className="text-center">
                <h1>Todo app</h1>
            </div>
            <div className="text-center">
                <input type="text" onChange={(e) => { setinput(e.target.value) }} placeholder="Enter a note" value={input} />
                <button type="button" className="btn btn-info ml-1" title="Add note" onClick={addNote}>+</button>
            </div>
            <div >
                {note.map((val, ind) => {
                    return (
                        <div key={ind}>
                            <div className="note" >
                                <h4>{val}</h4>
                                <button type="button" className="btn btn-info ml-1 dbtn" title="Add note" onClick={() => deleteNote(ind)}>-</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="text-center">
                <button onClick={alldelete}>Remove all</button>
            </div>
        </>
    )
}
export default Todo;