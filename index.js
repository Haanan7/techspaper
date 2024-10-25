document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('sheetdb-form');
    let successToastEl = document.getElementById('successToast');
    let errorToastEl = document.getElementById('errorToast');

    form.addEventListener("submit", e => {
        e.preventDefault(); // Prevent the default form submission
        console.log('Form submitted'); // Debug log

        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => {
            console.log('Response received:', response); // Debug log
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data); // Log the success response
            successToastEl.style.display = 'block'; // Show the success toast notification
            setTimeout(() => {
                successToastEl.remove(); // Remove from DOM after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            errorToastEl.style.display = 'block'; // Show the error toast notification
            setTimeout(() => {
                errorToastEl.remove(); // Remove from DOM after 3 seconds
            }, 3000); // 3000 milliseconds = 3 seconds
        });
    });
});