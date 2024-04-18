import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';
import { getDocs,doc, onSnapshot, collection, query, where } from 'firebase/firestore';
import SwipeButtons from './SwipeButtons'
import Header from './Header';

function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = collection(database, 'people');
      const querySnapshot = await getDocs(q);
      const cityList = querySnapshot.docs.map((doc) => doc.data());
      setPeople(cityList);
    };
  
    fetchData();
  
    // Cleanup function
    return () => {
      // If you need to clean up any resources, do it here
    };
  }, []); // Dependency array, empty means it only runs once after the initial render
  
  
  return (
    <div>
      <Header />
    
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={['up', 'down']}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
          <SwipeButtons />

    </div>
  );
}

export default TinderCards;
