import React from 'react';
import SmartPacketViewer from '../components/SmartPacketViewer';

const PulseDemo = () => {
  const transcript = "Hey Sarah, just wanted to follow up and see if you'd like to book a time.";
  const audioUrl = "/audio/sample-pulse.mp3";

  return (
    <SmartPacketViewer transcript={transcript} audioUrl={audioUrl} />
  );
};

export default PulseDemo;

