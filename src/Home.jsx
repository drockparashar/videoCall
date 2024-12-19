import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [roomUrl, setRoomUrl] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomUrl.trim()) {
      localStorage.setItem('dailyRoomUrl', roomUrl);
      navigate('/call');
    } else {
      alert('Please enter a valid Daily room URL.');
    }
  };

  return (
    <div className="home-container">
      <h1>Video Call</h1>
      <input
        type="text"
        placeholder="Enter Room URL"
        value={roomUrl}
        onChange={(e) => setRoomUrl(e.target.value)}
      />
      <button onClick={handleJoin}>Join Room</button>

      <div className='test-link'>
        <h3>To test paste this link:</h3>
        <p>https://pranshu.daily.co/testRoom</p>
      </div>
    </div>
  );
};

export default Home;