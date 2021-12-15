import { } from './DeleteConfirmation.css';

function DeleteConfirmation({
    show,
    onClose
}) {
    return (
        <div id="id01" className="modal">
            <form className="modal-content">
                <div className="container">
                    <h1>Delete Account</h1>
                    <p>Are you sure you want to delete your account?</p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="button" className="deletebtn">Delete</button>
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