import React, { useState, useEffect } from 'react';

const UserLocation = () => {
  const [latitude, setLatitude] = useState('N/A');
  const [longitude, setLongitude] = useState('N/A');
  const [locationStatus, setLocationStatus] = useState('Detecting location...');
  const [manualLat, setManualLat] = useState('');
  const [manualLon, setManualLon] = useState('');

  useEffect(() => {
    // Load manual location if available from localStorage
    const savedLat = localStorage.getItem('manualLat');
    const savedLon = localStorage.getItem('manualLon');
    if (savedLat && savedLon) {
      setLatitude(parseFloat(savedLat).toFixed(2));
      setLongitude(parseFloat(savedLon).toFixed(2));
      setLocationStatus('Using saved manual location.');
      setManualLat(savedLat);
      setManualLon(savedLon);
    } else if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude.toFixed(2));
          setLongitude(position.coords.longitude.toFixed(2));
          setLocationStatus('Location retrieved successfully.');
          setManualLat(position.coords.latitude.toFixed(2));
          setManualLon(position.coords.longitude.toFixed(2));
        },
        (error) => {
          setLocationStatus(`Error getting location: ${error.message}`);
          console.error('Error getting user location:', error);
        }
      );
    } else {
      setLocationStatus('Geolocation is not supported by your browser.');
    }
  }, []);

  const handleSaveLocation = () => {
    if (manualLat && manualLon) {
      localStorage.setItem('manualLat', manualLat);
      localStorage.setItem('manualLon', manualLon);
      setLatitude(parseFloat(manualLat).toFixed(2));
      setLongitude(parseFloat(manualLon).toFixed(2));
      setLocationStatus('Manual location saved!');
    } else {
      setLocationStatus('Please enter both latitude and longitude.');
    }
  };

  return (
    <>
      <section>
        <h2>Your Location</h2>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>{locationStatus}</p>
      </section>

      <section>
        <h2>Manual Location Input</h2>
        <label htmlFor="manualLat">Latitude:</label>
        <input type="number" id="manualLat" placeholder="e.g., 34.05" step="0.01" value={manualLat} onChange={(e) => setManualLat(e.target.value)} />
        <label htmlFor="manualLon">Longitude:</label>
        <input type="number" id="manualLon" placeholder="e.g., -118.25" step="0.01" value={manualLon} onChange={(e) => setManualLon(e.target.value)} />
        <button onClick={handleSaveLocation}>Save Location</button>
        <p>{locationStatus.includes('Manual location saved') ? locationStatus : ''}</p>
      </section>
    </>
  );
};

export default UserLocation;
