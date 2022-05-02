const {msgObj, sendMessage} = require('../util/helper');
const Message = require('../models/message');
const Contact = require('../models/contact');
const Sequelize = require('sequelize');

const postMessage = async (req, res) => {
    let senderId = req.body.From;
    let message = req.body.Body;
    let response = msgObj[message] ? msgObj[message] : 'Sorry, I don\'t understand';
    try {
        sendMessage(response, senderId);
    } catch(err) {
        response = err.message;
    }

    let contact = await Contact.findOne({
        where: {contactNumber: senderId}
    })
    console.log(message, response, contact);
    if(!contact) {
        const {id} = await Contact.create({
            contactNumber: senderId,
            requests: 1
            });
        await Message.create({
                recievedMessage: message,
                sentMessage: response,
                contactId: id

            })
    } else {
        Message.create({
            recievedMessage: message,
            sentMessage: response,
            contactId: contact.id
        })
        Contact.update(
            {requests: Sequelize.literal('requests + 1')}, 
            { where: { contactNumber: senderId}}
        )
    }
    res.status(200).send(response);

}
// return contactNumber with maximum number of requests in contact table
const getMaxRequests = async (req,res) => {
    let maxRequests = await Contact.findOne({
        attributes: ['contactNumber'],
        order: [['requests', 'DESC']],
        limit: 1
    })
     res.send(maxRequests.contactNumber);
}
module.exports = {getMaxRequests,postMessage};