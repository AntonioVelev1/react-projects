function Notes({
    note,
    updateNoteHandler,
    onDelete
}) {
    return (
        <>
            <div>
                <label>
                    <button onClick={(e) => updateNoteHandler(e, note)}>{note?.content}</button>
                    <button onClick={(e) => onDelete(e, note)}><i className="fas fa-trash-alt"></i></button>
                </label>

            </div>
        </>
    );
}

export default Notes;