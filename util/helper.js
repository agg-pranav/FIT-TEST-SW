const msgObj =  {
    '1' : 'response 1',
    '2' : 'response 2',
    '3' : 'response 3',
}

const sendMessage = async (message, senderId) => {
    try {
        const twilio = require('twilio');
        const keys = require('../config/keys').twilio;
        const client = new twilio(keys.accountSid, keys.authToken);
        const sent = await client.messages.create({
            body: message,
            to: senderId,
            from: keys.from
        });
        console.log(sent.sid);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { msgObj, sendMessage };