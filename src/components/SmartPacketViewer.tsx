// src/components/SmartPacketViewer.jsx

import React, { useEffect, useState } from "react";
import { inferIntent } from "@/utils/inferIntent";
import { loadIntentMap } from "@/utils/loadIntentMap";
import CTABar from "./CTABar";

const SmartPacketViewer = ({ transcript, audioUrl }) => {
  const [intentMap, setIntentMap] = useState({});
  const [inferredIntent, setInferredIntent] = useState(null);

  useEffect(() => {
    async function init() {
      const map = await loadIntentMap();
      setIntentMap(map);

      const intent = inferIntent(transcript);
      setInferredIntent(intent);
    }

    init();
  }, [transcript]);

  return (
    <div className="smart-packet">
      <audio controls src={audioUrl} />
      <p className="transcript">{transcript}</p>

      {inferredIntent && intentMap[inferredIntent] && (
        <CTABar message={transcript} />
      )}
    </div>
  );
};

export default SmartPacketViewer;
