import { useEffect } from "react"

type ModalProps = {
    children: JSX.Element,
    onClose: () => void,
    isOpen: boolean
}

export default function Modal({ children, onClose, isOpen}: ModalProps){

    useEffect(() => {
        if(isOpen){
            document.body.style.overflow = "hidden"
            document.body.style.paddingRight = '3px'
        }else{
            document.body.style.overflow = "auto"
            document.body.style.paddingRight = '0'
        }
    },[isOpen])

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