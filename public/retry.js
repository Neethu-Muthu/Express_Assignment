const fetch = require('node-fetch');

// Async function to fetch data from a URL with retry mechanism
async function fetchDataWithRetry(url, maxRetries = 3) {
  let retries = 0;
  while (retries < maxRetries) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      retries++;
      console.error(`Attempt ${retries} failed:`, error.message);
      if (retries === maxRetries) {
        throw new Error(`Maximum number of retries (${maxRetries}) reached. Unable to fetch data from ${url}`);
      }
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

// Example usage
const url = 'https://ssd-api.jpl.nasa.gov/sbdb.api?sstr=2015ab';
console.log("Fetching data with retry started...");
fetchDataWithRetry(url)
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.error("Error:", error.message);
  });
