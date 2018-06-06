require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('*', (req, res) => {
  res.send('Server is working.');
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: process.env.REACT_APP_USER,
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
    refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailer = ({email, name, text}) => {
  const message = {
    from: email,
    to: process.env.REACT_APP_USER,
    subject: `New message from ${name} at Stripefolio`,
    text: text,
    replyTo: email
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error);
        return
      }
      resolve(info);
    });
  })
};

app.post('/', (req, res) => {
  const {email = '', name = '', message = ''} = req.body;

  mailer({email, name, text: message}).then(() => {
    console.log('message sent');
    res.redirect('/#success');
  }).catch((error) => {
    console.log('send failed', error);
    res.redirect('/#error');
  })
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});