function changeText(button) {
   
    const textElement = document.getElementById("text");
    const originalText = "Graduate of Electronics and Communications Engineering , Interested in the field of Programming, especially Web Development, I aspire to become one of the best programmers in the world, I always strive to move forward and gain new experiences.";
    const newText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sint quasi est similique voluptatem nihil delectus veritatis quibusdam saepe beatae in quaerat praesentium, voluptas sapiente voluptatibus mollitia placeat quas ipsa?";

    
    if (textElement.innerText === originalText) {
        textElement.innerText = newText;
      
        button.innerText = "view last";
         
    } else {
        textElement.innerText = originalText; 
        button.innerText = "view more";
    }
}



(function() {
    emailjs.init("_YZTuAyY6qnyHBvfq"); 
})();
$(document).ready(function() {
    
    $("#contactForm").fadeIn(1000);

    
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

    
    $("#contactForm").on("submit", function(event) {
        event.preventDefault(); 

        
        const templateParams = {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val()
        };

       
        emailjs.send("service_ljmhqc7", "template_rwqhkfs", templateParams)
            .then(function(response) {
                alert("Message sent successfully!");
                $("#contactForm")[0].reset(); 
            }, function(error) {
                alert("Failed to send message. Please try again later.");
                console.error("EmailJS Error:", error);
            });
    });
});


