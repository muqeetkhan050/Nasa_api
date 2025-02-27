import React, { useState, useEffect } from "react";

const Apod = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = "dl3KYoB9xJGBTm0owQdEU7lAdauHDMQ1H0J9ML1k";

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Data is loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div>
      <h2>Picture of the Day</h2>
      {data && (
        <div>
          <h3>{data.title}</h3>
          <p>{data.date}</p>
          {data.media_type === "image" ? (
            <img src={data.url} alt={data.title} width="500" />
          ) : (
            <iframe src={data.url} title={data.title} width="500" height="300"></iframe>
          )}
          <p>{data.explanation}</p>
        </div>
      )}
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default Apod;
