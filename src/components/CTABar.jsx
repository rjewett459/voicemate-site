import React, { useEffect, useState } from 'react';

const CTABar = ({ inferredIntents = [], onIntentClick }) => {
  const [intentMap, setIntentMap] = useState({});

  useEffect(() => {
    const fetchIntentMap = async () => {
      try {
        const res = await fetch('/data/intentMap.json');
        if (!res.ok) throw new Error('Failed to fetch intent map');
        const data = await res.json();
        setIntentMap(data);
      } catch (error) {
        console.error('Error loading intent map:', error);
      }
    };

    fetchIntentMap();
  }, []);

  if (!inferredIntents.length || !Object.keys(intentMap).length) return null;

  return (
    <div className="flex flex-wrap gap-2 p-4 justify-center">
      {inferredIntents.map((intentId) => {
        const intent = intentMap[intentId];
        if (!intent || intent.enabled === false) return null;
        return (
          <button
            key={intentId}
            className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition"
            onClick={() => onIntentClick?.(intent.action)}
          >
            {intent.ctaLabel}
          </button>
        );
      })}
    </div>
  );
};

export default CTABar;
