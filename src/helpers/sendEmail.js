import { Email } from 'src/api/smtp'

const sendEmail = ({text, subject, to}) => {
  const login = process.env.REACT_APP_EMAIL_ADRESS
  const pass = process.env.REACT_APP_EMAIL_PASS

  Email.send({
    Host : "smtp.gmail.com",
    Username : login,
    Password : pass,
    To : to,
    From : login,
    Subject : subject || "Test letter without subject",
    Body : text
  })
  .then( () => console.log('mail sent successfully'))
  .catch( e => console.log(e, 'error'))
}

export { sendEmail }
