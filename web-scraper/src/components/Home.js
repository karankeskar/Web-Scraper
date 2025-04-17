import React, { useState } from 'react';
import '../styles/Home.css';

function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const handleLoadUrl = () => {
    const urlPattern = new RegExp("^(https?:\\/\\/)" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,})" + // domain name
  "(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*" + // port and path
  "(\\?[;&a-z\\d%@_.,~+&:=-]*)?" + // query string
  "(\\#[-a-z\\d_]*)?$", // fragment locator
  "i");
    if (!urlPattern.test(url)) {
      setError("❌ Please enter a valid URL");
    } else {
      setError("");
      console.log("✅ Valid URL entered:", url);
      // You can continue with loading the URL here
    }
  };

  return (
    <div className="content">
      <h1 className="title">Web Scraper</h1>
      <div className="url-box-container">
        <input
          className="url-box"
          placeholder="Enter URL to Scrape"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            setError(""); // Clear error while typing
          }}
        />
        <button className="load-url-button" onClick={handleLoadUrl}>
          Load URL
        </button>
        {error && <div className="error-text">{error}</div>}
      </div>
      <iframe width="560"
                        height="315"
                        src={url}
                        title="GeeksforGeeks" >
                </iframe>
    </div>
  );
}

export default Home;
