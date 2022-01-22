const router = require('express').Router();
const Exercise = require('../../models');
const withAuth = require('../../utils/auth');

router.post ("/", withAuth, async function(req, res){
    const body = req.body
    try {
        const newExercise = await Exercise.create({
            ...body, userId: req.session.userId
        });
        res.json (newExercise)
    } catch (error) {
        res.status (500).json(error)
    }
});

module.exports = router;