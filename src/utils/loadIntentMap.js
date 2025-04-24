// src/utils/loadIntentMap.js

export async function loadIntentMap() {
  try {
    const response = await fetch("/data/intentMap.json");
    const map = await response.json();
    return map;
  } catch (error) {
    console.error("Failed to load intent map:", error);
    return {};
  }
}
