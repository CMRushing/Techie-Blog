const { User } = require('../models');

const userData = [
    {
        username: "CliffSmith",
        github: "methodman",
        email: "csmith@gmail.com",
        password: "tical"
    },
    {
        username: "reggienoble",
        github: "redman",
        email: "noble@gmail.com",
        password: "Muddy Waters"
    },
    {
        username: "Cam",
        github: "CMRushing",
        email: "cameronrushing54@gmail.com",
        password: "Volume31999"
    },
    {
        username: "Kdot",
        github: "Klamar",
        email: "kendricklamar@gmail.com",
        password: "goodkidmaadcity"
    }
    
    
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;