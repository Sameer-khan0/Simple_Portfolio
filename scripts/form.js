let button = document.getElementById('sendBtn');
button.addEventListener('click', (event) => {
    event.preventDefault();
    if (!document.getElementById('myForm').checkValidity()) {
        return;
    }
    const originalButtonText = button.value;
    button.value = "Sending message...";

    emailjs.send("service_qg3rvqr", "template_0fotnoy", {
        name: document.getElementById('name').value,
        subject: document.getElementById("subject").value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value,
    }
    )
       .then(res => {
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('message').value = ""
            document.getElementById('subject').value = ""
            document.getElementById('phone').value = ""
            alert("Your message sent successfully.")
            console.log(res)
            button.value = originalButtonText;
            
        })
        .catch((err) => {
            console.log(err)
            alert("Error in sendin message please try again!")
            button.value = originalButtonText;
        })
})
