import { useNavigate } from "react-router-dom"
import '../../index.css'

export default function MonitorButton({setSelectedMonitor, selectedMonitor}) {
  const navigate = useNavigate();
  
  return (
    <button className='monitor-button' type='button' onClick={() => {
      setSelectedMonitor(0)
      navigate('/monitor')}
    }>MONITOR</button>
  )
}; 