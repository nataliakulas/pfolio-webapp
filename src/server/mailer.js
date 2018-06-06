const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('*', (req, res) => {
  res.send('Server is working.')
});

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "OAuth2",
    user: 'namiare.studio@gmail.com',
    clientId: '219214487601-ndr1rkheq680qenl1ngsme03nphtt687.apps.googleusercontent.com',
    clientSecret: '7G8YW3DyTB3bNe0xYk3ikIem',
    refreshToken: "1/F5bOcWGqMZhkPFvaZweq1nFbRpPP5WA-aCjzoz9R1Ac",
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailer = ({email, name, text}) => {
  const message = {
    from: email,
    to: 'namiare.studio@gmail.com',
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