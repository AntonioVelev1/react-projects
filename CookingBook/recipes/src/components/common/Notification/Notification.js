import { } from './Notification.css';

function Notification({
    message,
    onClose
}) {
    return (
        <div id="id01" className="notification">
            <form className="notification-content">
                <div className="notification-container">
                    <p className='notification-message'>{message}</p>

                    <div className="clearfix">
                        <button type="button" className="cancelbtn" onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Notification;