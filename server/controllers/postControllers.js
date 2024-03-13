const Tags = require('../models/Tags');
const Post = require('../models/Post');
const slugify = require('slugify');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createPost = async (req, res) => {
    const { title, content, tags } = req.body;
    const tagsArray = tags.split(',').map((tag) => tag.trim());
    tagsArray.forEach(async (tag) => {
        console.log('tag: ', tag);
        const tagExists = await Tags.findOne({ title: tag })
        console.log('tagExists: ', tagExists);
        if (tagExists) {
            tagExists.count += 1;
            await tagExists.save();
        }
        else {
            try {
                await Tags.create({ title: tag });
            } catch (error) {
                console.error('error: ', error.message);
            }
        }
    });
    const slug = slugify(title, { lower: true });
    try {
        const post = await Post.create({ title, content, tags: tagsArray, slug });
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getPostBySlug = async (req, res) => {
    const slug = req.params.slug;
    try {
        const post = await Post.findOne({ slug });
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ message: 'post fetched sucessfully', post });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}