const {msgObj, sendResponse} = require('../util/helper');
const Message = require('../models/message');
const Contact = require('../models/contact');
const Sequelize = require('sequelize');

const postMessage = async (req, res) => {
    let senderId = req.body.From;
    let message = req.body.Body;
    let response = msgObj[message] ? msgObj[message] : 'Sorry, I don\'t understand';
    sendResponse(response, senderId);

    let contact = await Contact.findOne({
        where: {contactNumber: senderId}
    })

    if(!contact) {
        Contact.create({
            contactNumber: senderId
            }).createMessage({
                recievedMessage: message,
                sentMessage: response
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

}
// return contactNumber with maximum number of requests in contact table
const getMaxRequests = async () => {
    let maxRequests = await Contact.findOne({
        attributes: ['contactNumber'],
        order: [['requests', 'DESC']],
        limit: 1
    })
     res.send(maxRequests.contactNumber);
}
module.exports = {getMaxRequests,postMessage};