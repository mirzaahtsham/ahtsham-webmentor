const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  '507264633345-93tkl65u5aoqnf764jphrtgh4l405qf3.apps.googleusercontent.com',
  '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',
  'http://localhost:3000/api/auth/google/callback'
);

const SCOPES = ['https://www.googleapis.com/auth/calendar.events'];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  prompt: 'consent',
});

console.log('Authorize this app by visiting this url:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from that page here: ', async (code) => {
  rl.close();
  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('\n✅ Your refresh token:', tokens.refresh_token);
    console.log('\nAdd this to your .env.local file');
  } catch (error) {
    console.error('Error retrieving access token', error);
  }
});