import { useState } from "react";
import { Link } from "react-router-dom";

function Notes({
    note,
    updateNoteHandler
}) {
    function deleteHandler(e) {
        e.preventDefault();
       // <button type="submit" onClick={deleteHandler}></button>
    }


    return (
        <>
            <div>
                <label>
                    
                    <button onClick={(e) => updateNoteHandler(e, note)}>{note?.content}</button>
                </label>
            
            </div>
        </>
    );
}

export default Notes;