
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import  ReactDom  from 'react-dom';
import './PhoneModal.css'

export default function PhoneModal({ open, children, onClose }){
  if(!open) return null;

  return ReactDom.createPortal(
    <>
     <div className='dark-overlay'>
      <div className='phone-modal' >
        <FontAwesomeIcon icon={faCircleXmark} onClick={onClose} className="close-modal"/>
        {children}
      </div>
     </div>
    </>,
    document.getElementById('portal')
  )

} 