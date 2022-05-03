const dotenv = require('dotenv');
dotenv.config();

const msgObj =  {
    '1' : 'response 1',
    '2' : 'response 2',
    '3' : 'response 3',
}

const sendMessage = async (message, senderId) => {
    try {
        const twilio = require('twilio');
        const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
        const sent = await client.messages.create({
            body: message,
            to: senderId,
            from: process.env.FROM
        });
        console.log(sent.to, sent.body, sent.sid);
    } catch(err) {
        console.log(err);
    }
}

module.exports = { msgObj, sendMessage };