const { Post } = require('../models');

const postData = [
    {
        title: "Add comment!",
        post_content: "Add a comment about tech.",
        user_id: 3
    },
    {
        title: "Need something here!",
        post_content: "Elaborate with more comments",
        user_id: 1
    },
    {
        title: " comment about Anime!",
        post_content: "Whats your favorite One Piece Arc!?",
        user_id: 2

    },
    {
        title: "Gimme a Bar",
        post_content: "imma bit infallible soundin like loaded lux, hide the heat thats loaded tux",
        user_id: 2
    },
    {
        title: "Jadakiss",
        post_content: "yall wanna make a movie so i came to edit wipin everybody out right before the credit!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;