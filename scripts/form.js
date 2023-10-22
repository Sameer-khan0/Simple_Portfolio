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


// const sendEmail = (e) => {
//     e.preventDefault();
//     const name = document.getElementById('name').value;
//     const subject = document.getElementById('subject').value;
//     const mobile_number = document.getElementById('phone').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     const parameters = {
//         name: name,
//         subject: subject,
//         mobile_number: mobile_number,
//         email: email,
//         message: message
//     };

//     const serviceID = 'service_qg3rvqr';
//     const templateID = 'template_0fotnoy'; 

//     emailjs.send(serviceID, templateID, parameters)
//         .then((response) => {
//             document.getElementById('name').value = '';
//             document.getElementById('subject').value = '';
//             document.getElementById('phone').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('message').value = '';
            
//             console.log(response);
//             alert('Message sent successfully!');
//         })
//         .catch((error) => {
//             console.error('Failed to send email. Error:', error);
//             alert('Failed to send message. Please try again later.');
//         });
// };
