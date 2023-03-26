const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  MAIL_SENDING_USER,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  OAUTH_PLAYGROUND
);

const sendMail = (to, url, txt, description, title) => {
  oauth2Client.setCredentials({
    refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
  });
  const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: MAIL_SENDING_USER,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken,
    },
  });

  const mailOptions = {
    from: MAIL_SENDING_USER,
    to: to,
    subject: txt,
    html: `
      <div style="max-width: 600px; padding: 10px; margin: auto; border: 1px solid #ddd;">
        <h2 style="text-align: center; text-transform: uppercase;color: #5e5e4a;">${title}</h2>
        <h3 style="text-align: center; text-transform: uppercase;color: crimson; font-size: 20px; color: #5e5e4a">${txt}</h3>
        <p style="text-align: center; font-size: 13px; ">${description}</p>
        <div style="text-align: center; font-size: 13px; ">
          <a href=${url} style="background: #5e5e4a; border-radius:5px; text-decoration: none; color: white; padding: 10px 20px; margin: 10px 0; display: inline-block;">${txt}</a>        
        </div>
        
        <p>If the button doesn't work for any reason, you can also click on the link below:</p>
          
        <div>${url}</div>
      </div>
    `,
  };

  smtpTransport.sendMail(mailOptions, (err, infor) => {
    if (err) return err;
    return infor;
  });
};

module.exports = sendMail;
