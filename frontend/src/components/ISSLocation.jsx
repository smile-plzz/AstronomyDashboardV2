import React, { useState, useEffect } from 'react';

const ISSLocation = () => {
  const [issData, setIssData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIss = async () => {
      try {
        const response = await fetch('/api/iss-location');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setIssData(data.iss_position);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIss();
    const interval = setInterval(fetchIss, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading ISS Location...</p>;
  if (error) return <p>Error loading ISS Location: {error}</p>;
  if (!issData) return null;

  return (
    <section>
      <h2>International Space Station (ISS) Location</h2>
      <p>Latitude: {issData.latitude}</p>
      <p>Longitude: {issData.longitude}</p>
    </section>
  );
};

export default ISSLocation;
