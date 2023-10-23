const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blogPost-name').value.trim();
    const description = document.querySelector('#blogPost-desc').value.trim();
  console.log('here')
    if (name && description) {
      const response = await fetch(`/create`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create blogpost');
      }
    }
  };

  document
  .querySelector('.new-blogPost-form')
  .addEventListener('submit', newFormHandler);