// Function to simulate a delay of 1 second
function delay() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }
  
  // Function to process an array of numbers with a delay
  async function processArrayWithDelay(array) {
    for (let i = 0; i < array.length; i++) {
      // Double each number with a delay
      array[i] *= 2;
      console.log(`Processed number: ${array[i]}`);
      await delay();
    }
  }
  
 
  const numbers = [1, 2, 3, 4, 5];
  
  console.log("Processing started...");
  processArrayWithDelay(numbers)
    .then(() => {
      console.log("Processing completed.");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  