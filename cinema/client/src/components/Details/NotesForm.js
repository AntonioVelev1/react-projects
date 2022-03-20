import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as noteService from '../../services/noteService';
import { useAuthContext } from "../../hooks/useAuthContenxt";

import Notes from "./Notes";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { noteSchema } from '../../validatons/NotesValidation';

function NotesForm() {
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState({});
    const [input, setInput] = useState('');

    const { movieId } = useParams();
    const { user } = useAuthContext();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur",
        resolver: yupResolver(noteSchema),
    });

    useEffect(() => {
        noteService.getAll({ userId: user?._id, movieId: movieId })
            .then((res) => {
                setNotes(res);
            })
    }, [note]);

    function addNoteHanlder(data, e) {
        e.preventDefault();

        let content = data.comment;


        if (hasNote()) {
            noteService.updateNote({ content: content, noteId: note._id })
                .then((res) => {
                    setNote(res);
                });
        }
        else {
            noteService.createNote({ content: content, userId: user._id, movieId: movieId })
                .then((res) => {
                    if (res) {
                        setNotes((notes) => [
                            ...notes,
                            res
                        ]);
                    }
                });
        }
        setInput('');
    }

    function hasNote() {
        return Object.keys(note).length > 0 && note.constructor === Object
    }

    function updateNoteHandler(e, data) {
        setNote(data);
        setInput(data.content);
    }

    function onDelete(e, data) {
        noteService.deleteNote({ noteId: data._id, userId: user._id })
            .then((res) => {
                if (res) {
                   setNote({});
                }
            });
    }

    function handleChange(event) {
        const value = event.target.value;
        setInput(value);
    }

    return (
        <div className="comment">
            <div className="comment-text">
                <div>
                    <form id="editForm" onSubmit={handleSubmit(addNoteHanlder)}>
                        <div className="input-group">
                            <textarea className="input-error" placeholder="Comment" {...register("comment")}
                                rows="5" cols="100" value={input} onChange={handleChange} type="text" name="comment" id="comment"></textarea>
                                {errors.comment?.message && <p className="validation-error">{errors.comment?.message}</p>}
                            <button type="submit" className="details-btn save">Save</button>
                        </div>
                    </form >
                </div >
            </div >
            <div>

                {notes?.length > 0
                    ? <><p>Notes</p>
                        {notes?.map((x) => <Notes note={x} onDelete={onDelete} updateNoteHandler={updateNoteHandler} key={x?._id} />)}
                    </>
                    : <p>No notes</p>
                }
            </div>
        </div >
    );
}

export default NotesForm;