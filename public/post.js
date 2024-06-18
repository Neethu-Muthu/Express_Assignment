const fetch = require('node-fetch');

// Async function to fetch and filter posts
async function fetchAndFilterPosts() {
  try {
    // Fetch data from the URL
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status} ${response.statusText}`);
    }

    // Parse the JSON response
    const posts = await response.json();

    // Filter the posts to include only those with userId equal to 1
    const filteredPosts = posts.filter(post => post.userId === 1);

    // Log the titles of the filtered posts
    filteredPosts.forEach(post => {
      console.log(post.title);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the async function
fetchAndFilterPosts();
