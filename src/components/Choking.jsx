// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Home.css';


export default function Choking(props) {
  // const navigate = useNavigate();
  const [selectedAge, setSelectedAge] = useState('');

  if (!selectedAge) {
    return (
      <section className='container'>
        <ul className='emergencies-button'>
          <button type="button" onClick={() => setSelectedAge('Adult')}>Adult 15yrs +</button>
          <button type="button" onClick={() => setSelectedAge('Child')}>Child 2-15yrs</button>
          <button type="button" onClick={() => setSelectedAge('Infant')}>Infant -2yrs</button>
        </ul>
      </section>
    )
  }


  if (selectedAge) {
    return (
      <section className='container'>
        <ol className='choking-steps'>
          {selectedAge === 'Adult' &&
            <>
              <li> Make sure the scene if safe for you to approach. </li>
              <li> Get consent if casualty is conscious. </li>
              <li> If consent is denied, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
              <li> If consent is accepted then begin with 5 abdominal thrust (as shown above) followed by 5 back blows (as shown above) until blockage is cleared. </li>
              <li> If the individual loses consciousness before blockage is cleared, continue with CPR. </li>
            </>
          }
          {selectedAge === 'Child' &&
            <>
              <li> Make sure the scene if safe for you to approach. </li>
              <li> Get consent from a parent or guardian if they are present, if not ask the child. </li>
              <li> If consent is denied by a parent or guardian, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
              <li> If consent is denied, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
              <li> If consent is accepted then begin with 5 abdominal thrust (as shown above) followed by 5 back blows (as shown above) until blockage is cleared. </li>
              <li> If the individual loses consciousness before blockage is cleared, continue with CPR. </li>
            </>
          }
          {selectedAge === 'Infant' &&
            <>
              <li> Make sure the scene if safe for you to approach. </li>
              <li> Get consent from a parent or guardian if they are present. </li>
              <li> If consent is denied by a parent or guardian, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
              <li> If consent is denied, wait until the casualty loses consciousness. An unconscious individual is assumed to give implied consent. Continue with CPR on the unconscious individual. </li>
              <li> If consent is accepted then begin with 5 abdominal thrust (as shown above) followed by 5 back blows (as shown above) until blockage is cleared. </li>
              <li> If the individual loses consciousness before blockage is cleared, continue with CPR. </li>
            </>
          }
        </ol>
      </section>
    );

  }
};