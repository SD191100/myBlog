const express = require('express');
const { getPosts, createPost, getPostBySlug } = require('../controllers/postControllers');
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:slug', getPostBySlug);

module.exports = router;