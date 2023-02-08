import './root.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Monitor() {
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  


  return (
    <main className='Monitor'>

      <section className='container'>
        <ul className='emergencies-button'>
          <button type="button" onClick={() => navigate('/pulse')}>Pulse</button>
          <button type="button" onClick={() => navigate('/respirations')}>Respirations</button>
          <button type="button" onClick={() => navigate('/skinCondition')}>Skin Condition</button>
          <button type="button" onClick={() => navigate('/pearl')}>Pupils</button>
          <button type="button" onClick={() => navigate('/extraNotes')}>Extra Notes</button>
        </ul>
      </section>

    </main>
  );
}


