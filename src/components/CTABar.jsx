// src/components/CTABar.jsx
import React, { useEffect, useState } from "react";
import { inferIntent } from "@/utils/inferIntent";
import { loadIntentMap } from "@/utils/loadIntentMap";

export default function CTABar({ message }) {
  const [intent, setIntent] = useState(null);
  const [intentMap, setIntentMap] = useState({});

  useEffect(() => {
    async function init() {
      const map = await loadIntentMap();
      setIntentMap(map);

      const inferred = inferIntent(message);
      setIntent(inferred);
    }
    init();
  }, [message]);

  if (!intent || !intentMap[intent]) return null;

  const cta = intentMap[intent];

  return (
    <div className="cta-bar">
      <button
        className={`cta-button ${cta.style}`}
        onClick={() => window.location.href = cta.action}
      >
        {cta.icon} {cta.cta}
      </button>
    </div>
  );
}
