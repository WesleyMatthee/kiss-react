import '../index.css';
import React, { useEffect } from 'react';

export default function UserHistory({userHistory, setUserHistory}) {

const fetchData = () => {
   
   Promise.all([
     fetch('http://localhost:3000/users/1').then(res => res.json()),  // 1 should be dynamic accordingly to user id
     fetch('http://localhost:3000/incident_types').then(res => res.json()),
     fetch('http://localhost:3000/vitals').then(res => res.json())
   ]).then((all) => {
     console.log(all);
     const users = all[0]
     const incident_types = all[1]
     const vitals = all[3]
      setUserHistory(all)
   })
   .catch((err) => {
      console.log(err.message);
   })
}

   useEffect(() => {
      fetchData()
   }, []);

return (
   <main>
   <section className="incidents">
        {userHistory[0] && userHistory[0].incidents.map(incident => (
         <p key={incident.id}>Location: {incident.location} Duration: {incident.incident_duration}</p>
        ))}
      </section>

      <section>
        {userHistory[1] && userHistory[1].map((incident_type) => {
            return (
              <div>
                <p className="incident_type">{incident_type.name}</p>
                </div>
            )
        })}
    </section>
    <section>
           {userHistory[2] && userHistory[2].map((vital) => {
               return (
                 <div>
                   <p className="vitals">{vital.pulse}</p>
                   </div>
               )
           })}
       </section>
      
      </main>
)

};



