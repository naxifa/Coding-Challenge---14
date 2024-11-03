

// Task 2 - Fetch Tickets Using Async/Await and Handle Errors

const fetchTickets = async function () {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to fetch ticket data!");
      }
  
      const tickets = await res.json();
      if (tickets.length === 0) {
        throw new Error("No unresolved tickets available");
      }
  
      displayTickets(tickets); // Call display function if data is successfully fetched
    } 

    catch (error) {
      console.log(error); // Log the error to the console
  
      // Display a user-friendly error message
      document.getElementById("ticket-container").innerHTML = `
        <p>Error loading tickets. Please try again later.</p>`;
    }
  };

  