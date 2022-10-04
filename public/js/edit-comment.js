const commentFormHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('textarea[name="content"]').value.trim();
    const comment_id = document.querySelector('input[name="comment-id"]').value;
    const post_id = document.querySelector('input[name="post-id"]').value;
  
    if (comment_content) {
      const response = await fetch(`/api/comments/${comment_id}`, {
        method: 'PUT',
        body: JSON.stringify({ comment_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#submit-post').addEventListener('click', commentFormHandler);