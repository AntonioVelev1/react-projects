import { } from './DeleteConfirmation.css';

function DeleteConfirmation({
    onAccept,
    onClose
}) {
    return (
        <div id="id01" className="modal">
            <form className="modal-content">
                <div className="confirm-container">
                    <h1>Delete Recipe</h1>
                    <p>Are you sure you want to delete your recipe?</p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={onClose}>Cancel</button>
                        <button type="button" className="deletebtn" onClick={onAccept}>Delete</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default DeleteConfirmation;