import './root.css';
import Nav from './nav';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';
import Carousel from './Carousel';
import { CarouselItem } from './CarouselItem';
import { useEffect, useState } from 'react';

export default function UserHistory() {

  const [userHistory, setUserHistory] = useState([]);
  useEffect(() => {
     fetch('http://localhost:3000/users')
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
        {userHistory.map((user) => {
            return (
                <p className="user">{user.username}</p>
            )
        })}
    </main>
  );


}