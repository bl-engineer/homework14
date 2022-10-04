const deleteCommentFormHandler = async (event) => {
    if (event.target.getAttribute('class') == 'delete-comment') {
        event.preventDefault();
        if (confirm("Are you sure you want to delete this comment?")) {
            const post_id = document.querySelector('input[name="post-id"]').value;
            const comment_id = event.target.getAttribute('data-id');
            const response = await fetch(`/api/comments/${comment_id}`, {
            method: 'DELETE',
            body: JSON.stringify({ comment_id }),
            headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                document.location.replace(`/post/${post_id}`);
            } else {
                alert('An error occured.');
            }
        }
    }
  };

  document.querySelector('#comment-section').addEventListener('click', deleteCommentFormHandler);