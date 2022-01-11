const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lorenzo.jiang8075@gmail.com',
        subject: 'Thank you for signing up',
        text: `Welcome ${name} to your personal task manager.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lorenzo.jiang8075@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}