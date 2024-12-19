import React, { useEffect } from 'react';
import Daily from '@daily-co/daily-js';
import { useNavigate } from 'react-router-dom';

const VideoCall = () => {
  const navigate = useNavigate();
  const roomUrl = localStorage.getItem('dailyRoomUrl');

  useEffect(() => {
    if (!roomUrl) {
      navigate('/');
      return;
    }

    const callFrame = Daily.createFrame({
      showLeaveButton: true,
      iframeStyle: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
      },
    });

    callFrame.join({ url: roomUrl });

    return () => callFrame.destroy();
  }, [roomUrl, navigate]);

  return null; // The Daily Prebuilt iframe takes up the whole screen
};

export default VideoCall;
