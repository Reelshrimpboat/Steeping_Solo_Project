const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


//GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM teas ORDER BY "id";`;
    pool.query(sqlText)
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
    const sqlText = `SELECT "user_teas"."id" AS "id", "teas"."name" AS "tea_name", "username", "tea_id", "rating", "favorited", "review", "owned" FROM "user"
                        FULL JOIN "user_teas" ON "user"."id" = "user_teas"."user_id"
                        FULL JOIN "teas" ON "user_teas"."tea_id" = "teas"."id"
                        WHERE "user"."id" = $1
                        ORDER BY "user_teas"."id" ;`;
    if (req.isAuthenticated()) {
        pool.query(sqlText, [req.user.id])
            .then(results => res.send(results.rows))
            .catch(error => {
                console.log(`Error making GET for teas, with user_id: ${req.user.id}`, error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;