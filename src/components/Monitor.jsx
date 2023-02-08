import { useState } from 'react';

import '../index.css'
import Pulse from './subMonitor/Pulse';
import Respirations from './subMonitor/Respirations';
import SkinCondition from './subMonitor/SkinCondition';
import Pearl from './subMonitor/Pearl';
import ExtraNotes from './subMonitor/ExtraNotes';



export default function Monitor({setSelectedMonitor, selectedMonitor}) {


    return (
      <>
      {selectedMonitor === 0 &&
        <section className='container'>
          <ul className='emergencies-button'>
            <button type="button" onClick={() => setSelectedMonitor(1)}>Pulse</button>
            <button type="button" onClick={() => setSelectedMonitor(2)}>Respirations</button>
            <button type="button" onClick={() => setSelectedMonitor(3)}>Skin Condition</button>
            <button type="button" onClick={() => setSelectedMonitor(4)}>Pupils</button>
            <button type="button" onClick={() => setSelectedMonitor(5)}>Extra Notes</button>
          </ul>
        </section>
      }
      {selectedMonitor === 1 &&
      <Pulse setSelectedMonitor={setSelectedMonitor}/>
      }
      {selectedMonitor === 2 &&
      <Respirations setSelectedMonitor={setSelectedMonitor}/>
      }
      {selectedMonitor === 3 &&
      <SkinCondition setSelectedMonitor={setSelectedMonitor}/>
      }
      {selectedMonitor === 4 &&
      <Pearl setSelectedMonitor={setSelectedMonitor}/>
      }
      {selectedMonitor === 5 &&
      <ExtraNotes setSelectedMonitor={setSelectedMonitor}/>
      }
      </>
 
      )

    };



