const {msgObj, sendMessage} = require('../util/helper');
const Message = require('../models/message');
const Contact = require('../models/contact');
const Sequelize = require('sequelize');

const postMessage = async (req, res) => {
    let senderId = req.body.From;
    let message = req.body.Body;
    let response = msgObj[message] ? msgObj[message] : 'Sorry, I don\'t understand';
    console.log(senderId, message);
    try {
        sendMessage(response, senderId);
    } catch(err) {
        console.log(err.message)
        response = err.message;
    }

    let contact = await Contact.findOne({
        where: {contactNumber: senderId}
    })
    let id = undefined;
    console.log(message, response, contact);
    if(!contact) { 
        let newContact = await Contact.create({
            contactNumber: senderId
            });
        id = newContact.id;
    } else {id = contact.id}
    await Message.create({
        body: message,
        type: 'recieved',
        contactId: id
    })
    await Message.create({
        body: response,
        type: 'sent',
        contactId: id
    })
    res.status(200).send(response);

}
// return contactNumber with maximum number of requests today
const getMaxRequestsToday = async (req,res) => {
    let today = new Date();
    let todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    let todayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    let maxRequests = await Message.findAll({
        include: Contact,
        attributes: [
            'contactId',
            [Sequelize.fn('COUNT', Sequelize.col('contactId')), 'count']
            // [Sequelize.fn('MAX', Sequelize.col('contactId')), 'maxId']
        ],
        where: {
            createdAt: {
                [Sequelize.Op.between]: [todayStart, todayEnd]
            }
        },
        group: 'contactId',
        order: [[Sequelize.col('count'), 'DESC']]
    })
    
    Contact.findOne({
        where: {
            id: maxRequests[0].contactId
            }
        })
        .then(contact => {
            res.status(200).send(contact.contactNumber);
        })
        .catch(err => {
            res.status(500).send(err);
        })
}

// const getMaxRequests = async (req,res) => {
//     let maxRequests = await Contact.findOne({
//         attributes: ['contactNumber'],
//         order: [['requests', 'DESC']],
//         limit: 1
//     })
//      res.send(maxRequests.contactNumber);
// }
module.exports = {getMaxRequestsToday,postMessage};