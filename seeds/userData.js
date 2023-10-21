const { User } = require('../models')

const usersData = [

    {
        name: "John",
        email: "john@hotmail.com",
        password: "password9999",
    },
    {
        name: "Alex",
        email: "Alex@hotmail.com",
        password: "password9999",
    },
    {
        name: "Jeff",
        email: "Jeff@hotmail.com",
        password: "password9999",
    },
];

const seedusers = () => User.bulkCreate(usersData, { individualHooks: true, returning: true })

module.exports = seedusers;