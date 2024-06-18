const axios = require('axios');

// Async function to make multiple requests in parallel using Axios
async function fetchMultipleUrlsWithAxios(urls) {
  try {
    // Map each URL to a promise that fetches data from the URL and records the response time
    const requests = urls.map(async url => {
      const startTime = Date.now();
      const response = await axios.get(url);
      const endTime = Date.now();
      const duration = endTime - startTime;
      return { url, duration };
    });

    // Wait for all promises to resolve
    const responses = await Promise.all(requests);

    // Find the request that took the longest time to complete
    const longestRequest = responses.reduce((max, current) => max.duration > current.duration ? max : current);

    // Log the URL and duration of the longest request
    console.log(`Longest request URL: ${longestRequest.url}`);
    console.log(`Duration: ${longestRequest.duration}ms`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}


const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Call the async function
fetchMultipleUrlsWithAxios(urls);
