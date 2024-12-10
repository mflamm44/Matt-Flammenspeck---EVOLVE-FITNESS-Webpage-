document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const review = document.getElementById('post-review').value;

    
    if (title && content && review) {
        
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
            <blockquote>${review}</blockquote>
            <hr>
        `;

        
        document.getElementById('blog-posts').prepend(postElement);

       
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
        document.getElementById('post-review').value = '';
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
