import React, { useState, useEffect } from 'react';

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch('/api/apod'); // Proxy to backend APOD endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setApodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApod();
  }, []);

  if (loading) return <p>Loading APOD...</p>;
  if (error) return <p>Error loading APOD: {error}</p>;
  if (!apodData) return null; // Should not happen if loading and error are handled

  return (
    <section id="apod">
      <h2>Astronomy Picture of the Day</h2>
      <h3>{apodData.title}</h3>
      <img src={apodData.url} alt={apodData.title} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>{apodData.explanation}</p>
      {apodData.copyright && <p>&copy; {apodData.copyright}</p>}
    </section>
  );
};

export default APOD;
