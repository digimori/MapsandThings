function sendMail(contactForm) {
    emailjs.send("service_ngpt9i8","template_nrbnqyk",{
        to_name: "{{from_name}}",
        from_name: "{{from_email}}",
        message: "{{project_request}}",
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
