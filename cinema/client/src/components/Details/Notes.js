import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function Notes({
    note,
    updateNoteHandler,
    onDelete
}) {
    return (
        <div className='notes'>
            <ButtonGroup aria-label="button group">
                <Button className='notes-content' onClick={(e) => updateNoteHandler(e, note)}>{note?.content}</Button>
                <Button onClick={(e) => onDelete(e, note)}><i className="fas fa-trash-alt"></i></Button>
            </ButtonGroup>
        </div>
    );
}

export default Notes;
