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

        // <div className="modal" show={show}>
        //     <div className='modal-content'>
        //     <div>
        //         <h1>Modal title</h1>
        //     </div>

        //     <dix>
        //         <p>Modal body text goes here.</p>
        //     </dix>

        //     <div>
        //         <button variant="secondary" onClick={onClose}>Close</button>
        //         <button variant="primary">Save changes</button>
        //     </div>
        //     </div>
        // </div>
    );
}

export default DeleteConfirmation;