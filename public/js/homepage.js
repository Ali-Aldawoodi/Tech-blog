    const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/blogpost/${id}`, {
        method: 'DELETE',
      });
    
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

  document.querySelector('.delete').addEventListener('click', delButtonHandler);
  