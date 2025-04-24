import React from "react";
import SmartPacketViewer from "@/components/SmartPacketViewer";

const PulsePage = () => {
  // Simulated smart packet data
  const transcript = "Hey Sarah, I just wanted to follow up with your request. I’ve got some options ready. Would you like to schedule a call or should I just send them over?";
  const audioUrl = "/audio/sample-pulse.mp3"; // Replace with real URL
  const inferredIntents = ["book_time", "ask_question", "open_file"];

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <SmartPacketViewer
        transcript={transcript}
        audioUrl={audioUrl}
        inferredIntents={inferredIntents}
      />
    </main>
  );
};

export default PulsePage;
