const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('*', (req, res) => {
  res.send('Server is working. Please post at "/contact" to submit a message.')
});

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: 'nataliakulas@gmail.com',
    clientId: '785945992775-dbsndmb9gt8d8ntvjpo0drp20ip2j8ra.apps.googleusercontent.com',
    clientSecret: 'QrII9opaVjxJ-eUtopceA3IK',
    access_token: 'ya29.GlvKBbch5Fw4kKBe-Ha2QykzMJfSbJM5x9azeV9wcpSq_AOMB7Q0bGkgYkWkUwWl_fYGhbFVhnydaNkw1i_Qq_XiZu_ROZuQNDbs1qZaetXZfxPenenEeqPJsSWZ',
    refreshToken: '1/ahLxE_HNCEYwCcxF1leSS8O5A4fPaD5l31bFcKDrOZc',
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailer = ({email, name, text}) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'nataliakulas@gmail.com',
    subject: `New message from ${from} at pfolio-webapp`,
    text,
    replyTo: from
  };


  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error);
        return
      }
      resolve(info)
    });
  })
};

app.post('/contact', (req, res) => {
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