import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as noteService from '../../services/noteService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

import Notes from "./Notes";

function NotesForm() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({});
    const { movieId } = useParams();
    const { user } = useAuthContext();

    useEffect(() => {
        noteService.getAll(user?._id)
            .then((res) => {
                setNotes(res);
            })
    }, []);

    function addNoteHanlder(e) {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let content = formData.get('comment');

        e.currentTarget.children[0].children[0].innerHTML = '';

        if (note) {
            noteService.updateNote({ content: content, noteId: note._id })
                .then((res) => {
                    setNote({});
                });
        }
        else {
            noteService.createNote({ content: content, userId: user._id, movieId: movieId })
                .then((res) => {
                    setNotes((state) => [
                        ...state,
                        res
                    ]);
                });
        }
    }

    function updateNoteHandler(e, data) {
        setNote(data);
    }
    function change() {
        if (Object.keys(note).length === 0 && note.constructor === Object) {
            return '';
        } else {
            return note?.content;
        }
    }

    return (
        <div className="comment">
            <div className="comment-text">
                <div>
                    <form id="editForm" onSubmit={addNoteHanlder}>
                        <div className="input-group">
                            <textarea className="input-error" placeholder="Comment"
                                rows="5" cols="100" value={change()} type="text" name="comment" id="comment"></textarea>
                            <button type="submit" className="details-btn save">Save</button>
                        </div>
                    </form >
                </div >
            </div >
            <div>
                <p>Notes</p>
                {
                    notes?.map((x) => <Notes note={x} updateNoteHandler={updateNoteHandler} key={x._id} />)
                }
            </div>
        </div >
    );
}

export default NotesForm;