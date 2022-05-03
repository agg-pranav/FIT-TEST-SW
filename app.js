const express = require('express');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const sequelize = require('./util/dbConnect');
const Contact = require('./models/contact')
const Message = require('./models/message')

const messageRouter = require('./routes/message.routes');

Contact.hasMany(Message, {
    foreignKey: 'contactId',
});
Message.belongsTo(Contact, {
    foreignKey: 'contactId',
});
sequelize.sync({force:true})
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.log(err);
    });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/message',messageRouter)

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    }
);
