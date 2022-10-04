const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('textarea[name="comment"]').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value;
  
    if (comment_content) {
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ comment_content, post_id }),
          headers: { 'Content-Type': 'application/json' },
        });
      
        if (response.ok) {
          document.location.reload();
          console.log(response);
        } else {
          alert(response.statusText);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  document.querySelector('#submit-comment').addEventListener('click', commentFormHandler);