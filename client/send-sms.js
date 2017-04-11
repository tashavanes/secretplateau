// Twilio Credentials
const accountSid = 'AC8c3504522c520c193783e64e0d493739';
const authToken = '948ff1641573d647735006c371f2ed46';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+19782247250',
    from: '+19782212612',
    messaging_service_sid: 'MGf35b578dd42e5d59e07e2bbd0628dfb0',
    uri: '/2010-04-01/Accounts/AC8c3504522c520c193783e64e0d493739/Messages/SM1fed2c6b6c6a4c63911c078811efdd2a.json',
    direction: 'outbound-api',
    body: 'A little applet. Reply to this text with either Parsnip, Celery, or Puffer.',
  })
  .then((message) => console.log(message.sid,message.status));
