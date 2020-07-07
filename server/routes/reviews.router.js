const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//GET Review Route
router.get('/:id', (req, res) => {
    const queryText = `SELECT "user_teas"."id", "tea_id", "rating", "review", "username", "user_id" FROM "user_teas"
                JOIN "user" ON "user_teas"."user_id" = "user"."id"
                WHERE "tea_id" = $1 AND "review" IS NOT NULL`;
    console.log('get request tea_id:', req.params.id)
    pool.query(queryText, [req.params.id])
        .then((result) => {
            console.log(`GET Ratings database request successful`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making GET Ratings for teas:`, error);
            res.sendStatus(500);
        })
}); //END GET Review Route

//POST for reviews
router.post('/:id', (req, res) => {
    const queryText = `INSERT INTO "user_teas"
                ("user_id", "tea_id", "review", "rating")
                SELECT $1, $2,$3, $4
                ON CONFLICT ON CONSTRAINT user_teas_uq
                DO UPDATE SET "review"=$5, "rating"=$6;`
                
    console.log('post request, user id:', req.user.id, 'tea_id:', req.params.id, 'review:', req.body.review)
if (req.isAuthenticated(queryText)) {
        pool.query(queryText, [req.user.id, req.params.id, req.body.review, req.body.rating, req.body.review, req.body.rating])
        .then((results) => {
            res.send(results);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        })
    }
    else{
        res.sendStatus(403);
    }
});//END POST for reviews

module.exports = router;