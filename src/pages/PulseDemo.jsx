import React from 'react';
import SmartPacketViewer from '../components/SmartPacketViewer';

const PulseDemo = () => {
  const transcript = "Hey Sarah, just wanted to follow up...";
  const audioUrl = "/audio/sample-pulse.mp3";
  const inferredIntents = ["book_time", "ask_question", "open_file"];

  return (
    <SmartPacketViewer
      transcript={transcript}
      audioUrl={audioUrl}
      inferredIntents={inferredIntents}
    />
  );
};

export default PulseDemo;

