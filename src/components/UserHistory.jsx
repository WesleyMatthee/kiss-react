import '../index.css';
import React, { useEffect, useState } from 'react';

export default function UserHistory() {

  const [userHistory, setUserHistory] = useState([]);
  useEffect(() => {
     fetch('http://localhost:3000/users/1')
        .then((response) => response.json())
        .then((users) => {
           console.log(users);
           setUserHistory(users);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/incidents/1')
       .then((response) => response.json())
       .then((users) => {
          console.log(users);
          setUserHistory(users);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

 useEffect(() => {
   fetch('http://localhost:3000/incident_types')
      .then((response) => response.json())
      .then((users) => {
         console.log(users);
         setUserHistory(users);
      })
      .catch((err) => {
         console.log(err.message);
      });
}, []);


  return (
    <main>
        {userHistory.incidents && userHistory.incidents.map((incident) => {
            return (
              <div>
                <p className="user">{incident.location}</p>
                <p className="user">{incident.age_stage}</p>
                </div>
            )
        })}
    </main>
  );
};
