import React from "react";
import CTABar from "@/components/CTABar";

const SmartPacketViewer = ({ transcript, audioUrl, inferredIntents }) => {
  const handleIntentClick = (action) => {
    if (action === "open_scheduling_link") {
      window.open("https://calendly.com/rick/15min", "_blank");
    } else if (action === "open_reply_input") {
      alert("Reply input would open here.");
    } else {
      console.log("Triggered action:", action);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 space-y-6 bg-white dark:bg-black rounded-xl shadow-xl">
      <audio controls src={audioUrl} className="w-full rounded-md" />
      <div className="text-lg leading-relaxed text-gray-800 dark:text-gray-100">
        {transcript}
      </div>

      <CTABar
        inferredIntents={inferredIntents}
        onIntentClick={handleIntentClick}
      />
    </div>
  );
};

export default SmartPacketViewer;
