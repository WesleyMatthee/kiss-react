import { useNavigate } from "react-router-dom"
import '../../index.css'

export default function MonitorButton() {
  const navigate = useNavigate();
  
  return (
    <button className='monitor-button' type='button' onClick={() => navigate('/monitor')}>MONITOR</button>
  )
}; 