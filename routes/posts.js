const express = require('express');
const models = require('../models');

const router = express.Router()

router.get("/", (req, res) => {
    // models.Post.findOrCreate().then(result => {
    //     res.send(result.toJSON()).status(201);
    // })
    res.send("Posts").status(201)
})

router.post("/", (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        userId: 1
    }

    models.Post.create(post).then(result => {
        res.status(201).json({
            message: "Post Created",
            post: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Error",
            error: error
        })
    })
})

module.exports = router;