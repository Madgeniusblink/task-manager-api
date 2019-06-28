
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// GOAL: Figure out why they are joing, what features they are looking for | Start a conversation
const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'madgeniusblink@gmail.com',
        subject: 'Thanks for joining in!',
        html: `<p><strong>Welcome</strong> ${name}</p> <p>Let me know how you get along with the app.</p>`
    })
}

// GOAL: Figure out why they left | Start a conversation
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'Madgeniusblink@gmail.com',
        subject: `Its hard to let you go ${name}`,
        html: `<strong>Noo!</strong> <p>We are sad to see you go ${name}</p> <p>${name} is there something we could of done to kept you on board?</p> <button>Yes</button> <button>No</button>`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}



















