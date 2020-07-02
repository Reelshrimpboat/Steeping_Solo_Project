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
router.post('/review/:id', (req, res) => {
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

//POST for owned
router.post('/owned/:id', (req, res) => {
    const queryText = `INSERT INTO "user_teas"
                ("user_id", "tea_id", "owned")
                SELECT $1, $2, $3
                ON CONFLICT ON CONSTRAINT user_teas_uq
                DO UPDATE SET "owned"=$4;`

    console.log('Owned post request, user id:', req.user.id, 'tea_id:', req.params.id, 'owned:', req.body.status)
    if (req.isAuthenticated(queryText)) {
            pool.query(queryText, [req.user.id, req.params.id, req.body.status, req.body.status])
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
}); //END POST for owned

//POST for favorite
router.post('/favorite/:id', (req, res) => {
    const queryText = `INSERT INTO "user_teas"
                ("user_id", "tea_id", "favorited")
                SELECT $1, $2, $3
                ON CONFLICT ON CONSTRAINT user_teas_uq
                DO UPDATE SET "favorited"=$4;`

    console.log('Favorite post request, user id:', req.user.id, 'tea_id:', req.params.id, 'favorite:', req.body.status)
    if (req.isAuthenticated(queryText)) {
        pool.query(queryText, [req.user.id, req.params.id, req.body.status, req.body.status])
            .then((results) => {
                res.send(results);
            }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
}); //END POST for favorite

//POST for rating
router.post('/rating/:id', (req, res) => {
    const queryText = `INSERT INTO "user_teas"
                ("user_id", "tea_id", "rating")
                SELECT $1, $2, $3
                ON CONFLICT ON CONSTRAINT user_teas_uq
                DO UPDATE SET "rating"=$4;`

    console.log('Rating post request, user id:', req.user.id, 'tea_id:', req.params.id, 'rating:', req.body.status)
    if (req.isAuthenticated(queryText)) {
        pool.query(queryText, [req.user.id, req.params.id, req.body.status, req.body.status])
            .then((results) => {
                res.send(results);
            }).catch((error) => {
                console.log(error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
}); //END POST for rating

module.exports = router;