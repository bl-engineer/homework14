const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({});
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const data = await Comment.create({
            comment_content: req.body.comment_content,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        });
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const data = await Comment.update({
            comment_content: req.body.comment_content
        },
        {
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No comment with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const data = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!data) {
            res.status(404).json({message: 'No comment with this ID'});
            return;
        }
        res.json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;