const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM teas ORDER BY "id";`;
    pool.query(queryText)
        .then((result) => {
            console.log(`Returned from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making GET for teas:`, error);
            res.sendStatus(500);
        })
});//END GET Route

//GET Route for owned teas
router.get('/users/', rejectUnauthenticated, (req, res) => {

    //Change text once the to include table for owned teas
    const queryText = `SELECT "user_teas"."id" AS "id", "teas"."name" AS "tea_name", "username", "tea_id", "rating", "favorited", "review", "owned" FROM "user"
                        FULL JOIN "user_teas" ON "user"."id" = "user_teas"."user_id"
                        FULL JOIN "teas" ON "user_teas"."tea_id" = "teas"."id"
                        WHERE "user"."id" = $1
                        ORDER BY "user_teas"."id" ;`;
    if (req.isAuthenticated(queryText)) {
        pool.query(queryText, [req.user.id])
            .then(results => res.send(results.rows))
            .catch((error) => {
                console.log(`Error making GET for user_teas, with user_id: ${req.user.id}`, error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

//GET Rating Route
router.get('/ratings/', (req, res) => {
    const queryText = `SELECT "user_teas"."tea_id", ROUND(AVG("rating"), 2) AS "rating" FROM "teas"
                        FULL JOIN "user_teas" ON "teas"."id" = "user_teas"."tea_id"
                        GROUP BY "user_teas"."tea_id"
                        ORDER BY "user_teas"."tea_id";`;
    pool.query(queryText)
        .then((result) => {
            console.log(`GET Ratings database request successful`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making GET Ratings for teas:`, error);
            res.sendStatus(500);
        })
}); //END GET Rating Route

//GET Review Route
router.get('/review/:id', (req, res) => {
    const queryText = `SELECT "tea_id", "review", "username"  FROM "user_teas"
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
router.post('/review/:id', (req, res) => {
    const queryText = `INSERT INTO "user_teas"
                ("user_id", "tea_id", "review")
                SELECT $1, $2,'$3'
                ON CONFLICT ON CONSTRAINT user_teas_uq
                DO UPDATE SET "review"='$3';`
                
    console.log('post request, user id:', req.user.id, 'tea_id:', req.body.id, 'review:', req.body.review)
    res.sendStatus(200);
// if (req.isAuthenticated(queryText)) {
//         pool.query(queryText, [req.user.id, req.body.id, req.body.review])
//         .then((results) => {
//             res.send(results);
//         }).catch((error) => {
//             console.log(error);
//             res.sendStatus(500);
//         })
//     }
//     else{
//         res.sendStatus(403);
//     }
});

module.exports = router;