const express = require("express");

const { PostModel } = require("../models/PostModel");
const PostCrud = require('../utils/crud/PostCrud');
const { findOnePost } = require("../utils/crud/PostCrud");

const router = express.Router();


//find one route by ID
router.get("/", async (request,response) => {
    let result = await findOnePost({_id: request.params.postId});
    response.json({
        data: result
    });
});

module.exports = router;