async function visitedFormHandler(event) {
    event.preventDefault();
  
    const visited_location = document.querySelector('text[name="visited_location"]').value;
    const visited_departure = document.querySelector('date[name="visited_departure"]').value;
    const visited_returnDate = document.querySelector('date[name="visited_returnDate"]').value;
    // boolean for return? or option for the next one??
    const visited_return = document.querySelector('boolean[name="visited_return"]').value;
    const visited_transportation = document.querySelector('option[name="visited_transportation"]').value;
    const visited_description = document.querySelector('textarea[name="visited_description"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-visited-form').addEventListener('submit', newFormHandler);
  