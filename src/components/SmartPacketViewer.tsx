// src/components/SmartPacketViewer.jsx

import React, { useEffect, useState } from "react";
import { inferIntent } from "@/utils/inferIntent";
import { loadIntentMap } from "@/utils/loadIntentMap";
import CTABar from "./CTABar";

const SmartPacketViewer = ({ transcript, audioUrl }) => {
  const [intentMap, setIntentMap] = useState({});
  const [intents, setIntents] = useState([]);

  useEffect(() => {
    async function init() {
      const map = await loadIntentMap();
      setIntentMap(map);

      const topIntents = inferIntent(transcript);
      setIntents(topIntents);
    }

    init();
  }, [transcript]);

  return (
    <div className="smart-packet">
      <audio controls src={audioUrl} />
      <p className="transcript">{transcript}</p>

      <CTABar intents={intents} intentMap={intentMap} />
    </div>
  );
};

export default SmartPacketViewer;
