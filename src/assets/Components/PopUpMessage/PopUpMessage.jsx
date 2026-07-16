import './PopUpMessage.css'

function PopUpMessage({ message, type = "success" }) {
    return (
        <div className={`popupMessage popupMessage-${type}`}>
            {message}
        </div>
    );
}

export default PopUpMessage;
