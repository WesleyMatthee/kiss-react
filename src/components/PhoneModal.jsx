
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


export default function PhoneModal({ open, children, onClose }){
  if(!open) return null;

  return(
  <div>
    <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} className="close-modal"/>
    {children}
  </div>
  )

} 