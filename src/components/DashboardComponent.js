import React from 'react';
import Card from './CardComponent.js'

const DashboardComponent = () => {
  return (
    <div className='w-full'>
      <h2 className='font-bold text-3xl'>Welcome to Your Mental Health Dashboard</h2>
      <p>Our Features</p>
      <Card />
      {/* <ul>
        <li>Take the PHQ-9 Depression Test</li>
        <li>Track Sleep and Nutrition (Mood-Regulating Tools)</li>
        <li>Access Virtual Counseling</li>
        <li>Engage in Anonymous Peer Chat</li>
        <li>Explore the Resource Directory</li>
      </ul> */}
    </div>
  );
};

export default DashboardComponent;
