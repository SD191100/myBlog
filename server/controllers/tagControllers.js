const Tags = require('../models/Tags');
const Post = require('../models/Post');

exports.getTags = async (req, res) => {
    try {
        const tags = await Tags.find();
        res.json(tags);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.getPostsByTag = async (req, res) => {
    const { tag } = req.params;
    try {
        const posts = await Post.find({ tags: tag });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}