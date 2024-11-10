(function() {
    emailjs.init("_YZTuAyY6qnyHBvfq"); 
})();
$(document).ready(function() {
    // Fade in the form when the page loads
    $("#contactForm").fadeIn(1000);

    // Animate input fields on focus
    $(".input-field").focus(function() {
        $(this).animate({
            backgroundColor: "#e8f0fe",
            paddingLeft: "15px"
        }, 300);
    }).blur(function() {
        $(this).animate({
            backgroundColor: "#fff",
            paddingLeft: "10px"
        }, 300);
    });

    // Handle form submission
    $("#contactForm").on("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Capture form data
        const templateParams = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

        // Send the email using EmailJS
        emailjs.send("service_ljmhqc7", "template_rwqhkfs", templateParams)
            .then(function(response) {
                alert("Message sent successfully!");
                $("#contactForm")[0].reset(); // Clear form fields
            }, function(error) {
                alert("Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});

