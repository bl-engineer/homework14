const deletePostFormHandler = async (event) => {
    console.log(event.target);
    if (event.target.getAttribute('class') == 'delete-post') {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this post?")) {
            const post_id = event.target.getAttribute('data-id');
            
            const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ post_id }),
            headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('An error occured.');
            }
        }
    }
  };

  try {
  document.querySelector('#all-posts').addEventListener('click', deletePostFormHandler);
  } catch {}
  
  try {
  document.querySelector('#post-header').addEventListener('click', deletePostFormHandler);
  } catch {}