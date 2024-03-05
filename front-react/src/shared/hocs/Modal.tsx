
type ModalProps = {
    children: JSX.Element,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal({ children, onClose, isOpen}: ModalProps){

    return(
        <div onClick={() => onClose()} className={"modal " + ( isOpen ? "modal--open" : "" )}>
            <div onClick={event => event.stopPropagation()} className="modal-content">
                <div className="modal-inner">
                    {
                        children
                    }
                </div>
            </div>
        </div>
    )
}