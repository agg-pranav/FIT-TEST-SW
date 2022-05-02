const express = require('express');
const morgan = require('morgan');
const Sequlize = require('sequelize');
const sequelize = require('../util/dbConnect');
const Contact = require('./models/contact')
const Message = require('./models/message')

Contact.hasMany(Message, {
    foreignKey: 'contactId',
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.log(err);
    });
    

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);