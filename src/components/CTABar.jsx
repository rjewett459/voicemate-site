// src/components/CTABar.jsx

import React from "react";

export default function CTABar({ intents = [], intentMap = {} }) {
  if (!intents.length) return null;

  return (
    <div className="cta-bar">
      {intents.map((intent) => {
        const cta = intentMap[intent];
        if (!cta) return null;

        return (
          <button
            key={intent}
            className={`cta-button ${cta.style}`}
            onClick={() => window.location.href = cta.action}
          >
            {cta.icon} {cta.cta}
          </button>
        );
      })}
    </div>
  );
}
