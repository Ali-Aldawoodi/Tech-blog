const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blogpost-name').value.trim();
    const needed_funding = document.querySelector('#blogpost-funding').value.trim();
    const description = document.querySelector('#blogpost-desc').value.trim();
  
    if (name && needed_funding && description) {
      const response = await fetch(`/api/blogpost`, {
        method: 'POST',
        body: JSON.stringify({ name, needed_funding, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };

  document
  .querySelector('.new-blogpost-form')
  .addEventListener('submit', newFormHandler);