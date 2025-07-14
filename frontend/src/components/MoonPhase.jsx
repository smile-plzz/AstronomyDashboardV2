import React, { useState, useEffect } from 'react';

const MoonPhase = () => {
  const [moonPhaseText, setMoonPhaseText] = useState('');

  useEffect(() => {
    const calculateMoonPhase = () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // Month is 0-indexed
      const day = date.getDate();

      let lp = 29.530588; // Lunar synodic period (average days)
      let new_moon = new Date(2000, 0, 6, 18, 30, 0); // New moon on Jan 6, 2000, 18:30 UT
      let phase = ((date.getTime() - new_moon.getTime()) / (1000 * 60 * 60 * 24)) % lp;

      let phaseText = '';
      if (phase < 1.84566) phaseText = 'New Moon';
      else if (phase < 5.53699) phaseText = 'Waxing Crescent';
      else if (phase < 9.22831) phaseText = 'First Quarter';
      else if (phase < 12.91963) phaseText = 'Waxing Gibbous';
      else if (phase < 16.61096) phaseText = 'Full Moon';
      else if (phase < 20.30228) phaseText = 'Waning Gibbous';
      else if (phase < 23.99361) phaseText = 'Last Quarter';
      else if (phase < 27.68493) phaseText = 'Waning Crescent';
      else phaseText = 'New Moon';

      setMoonPhaseText(phaseText);
    };

    calculateMoonPhase();
  }, []);

  return (
    <section>
      <h2>Current Moon Phase</h2>
      <p>{moonPhaseText}</p>
    </section>
  );
};

export default MoonPhase;
