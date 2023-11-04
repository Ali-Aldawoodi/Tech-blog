const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blogPost-name').value.trim();
    const content = document.querySelector('#blogPost-desc').value.trim();
  


    if (title && content) {
      const response = await fetch(`/api/dashboard/:id`, {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
       console.log(response)
  
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