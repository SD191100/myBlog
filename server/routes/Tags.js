const express = require('express');
const { getTags, getPostsByTag } = require('../controllers/tagControllers');

const router = express.Router();

router.get('/', getTags);
router.get('/:tag', getPostsByTag);

module.exports = router;