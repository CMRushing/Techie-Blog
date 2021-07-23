const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Mic Check one two one two!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Nah!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Who Dat Who Dat!"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Its Mickey!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "nah you're buggin!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "whats really good!"
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Jigga man you got that holla back!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "gimme the loot!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;