$(document).ready(function() {
    $('#form').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
 
        if (name && email && message) {
            $('#form-response').text('Thank you for your message!');
            $(this).trigger('reset'); // Reset the form
        } else {
            $('#form-response').text('Please fill out all fields.');
        }
    });
 });
 