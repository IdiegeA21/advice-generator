// Define the API endpoint URL for fetching advice
const adviceAPI = `https://api.adviceslip.com/advice`;

// Async function to generate and retrieve advice
async function generateAdvice() {
    try {
        // Try to fetch data from the API
        let response = await fetch(adviceAPI);

        // Parse the response as JSON data
        let data = await response.json();

        // Extract the "slip" object containing the advice text and the id
        const advice = data.slip;
        console.log(advice);  // Log the extracted advice text for debugging (optional)
        return advice;
    } catch (error) {
        console.log("An error occured");
        return error;
    }
}

// Reference HTML elements for displaying advice and advice number
const btn = document.getElementById("dice-img"); 
const adviceId = document.getElementById("advice-number");
const adviceDiv = document.querySelector("#the-advice > h1"); // h1 element within a div with ID "the-advice"

// Add click event listener to the button
btn.addEventListener("click", async () => {
    // Call the generateAdvice function asynchronously
    const adviceData = await generateAdvice();

      // Extract the id and advice properties from the returned data object
    const id = adviceData.id;
    const advice = adviceData.advice;

  // Update the advice text and advice number in the HTML elements
    adviceId.innerText = `Advice: #${id}`;
    adviceDiv.innerText = `"${advice}"`;
});