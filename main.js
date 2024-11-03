

// Task 2 - Fetch Tickets Using Async/Await and Handle Errors

const fetchTickets = async function () {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error("Failed to fetch ticket data");
      }
  
      const tickets = await res.json();
      if (tickets.length === 0) {
        throw new Error("No unresolved tickets available");
      }
  
      displayTickets(tickets); // Call display function if data is successfully fetched
    } 

    catch (error) {
      console.log(error); // Log the error to the console
  
      // user-friendly error message
      document.getElementById("ticket-container").innerHTML = `
        <p>Error loading tickets. Please try again later.</p>`;
    }

// Task 4: Ensure Cleanup

    finally {
        console.log("Fetch attempt completed"); 
      }

  };



// Task 3 - Display Tickets Dynamically on the Page

  const displayTickets = function (tickets) {
    const ticketContainer = document.getElementById("ticket-container");

    ticketContainer.innerHTML = ''; // Clear previous content
  
    // Use map to generate HTML for each ticket and join to a single string
    ticketContainer.innerHTML = tickets.map(ticket => `
      <div>

        <h3>Ticket ID: ${ticket.id}</h3>
        <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
        <p><strong>Issue Description:</strong> ${ticket.title}</p>
        <p><strong>Details:</strong> ${ticket.body}</p>

      </div>
    `).join('');
  };

fetchTickets();

