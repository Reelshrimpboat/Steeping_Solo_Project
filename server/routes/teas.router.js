const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

//Tea Routes
//GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT "user_teas"."tea_id", "teas"."id", "kind_id", "teas"."name", "brand", "temp_F", "min_time", "max_time", "bitters", "description", "picture", "google_search_id", "categories"."name" AS "kind", ROUND(AVG("rating"), 2) AS "rating" FROM "teas"
                            FULL JOIN "categories" ON "teas"."kind_id" = "categories"."id"
                            FULL JOIN "user_teas" ON "teas"."id" = "user_teas"."tea_id"
                            GROUP BY  "teas"."id", "user_teas"."tea_id", "kind_id", "teas"."name", "brand", "temp_F", "min_time", "max_time", "bitters", "description", "picture", "google_search_id", "categories"."name"
                            ORDER BY "teas"."id";`;
    pool.query(queryText)
        .then((result) => {
            //console.log(`Returned from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making GET for teas:`, error);
            res.sendStatus(500);
        })
});//END GET Route

//POST for Teas
router.post('/', (req, res) => {
    const queryText = `INSERT INTO "teas"
        ("name", "kind_id", "temp_F", "min_time", "max_time", "bitters", "description", "picture", "google_search_id")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ;`
    const tea = req.body;
    console.log('Tea submission request post request, req.user:', req.user, 'req.body:', req.body)
    res.sendStatus(200)
    if (req.isAuthenticated(queryText) && req.user.auth_level > 1) {
            pool.query(queryText, [tea.name, tea.kind_id, tea.temp_F, tea.min_time, tea.max_time, tea.bitters, tea.description, tea.picture, tea.google_search_id])
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
//END Routes for Teas

//PUT for Teas
router.put('/', (req, res) => {
    const queryText = `UPDATE "teas"
        SET ("name", "brand", "temp_F", "min_time", "max_time", "bitters", "description", "picture", "google_search_id") = 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        WHERE "id" = $10;
        ;`
    const tea = req.body;
    console.log('Tea submission request post request, req.user:', req.user, 'req.body:', req.body)
    if (req.isAuthenticated(queryText) && req.user.auth_level > 1) {
            pool.query(queryText, [tea.name, tea.kind_id, tea.temp_F, tea.min_time, tea.max_time, tea.bitters, tea.description, tea.picture, tea.google_search_id, req.body.id])
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
}); //END Put
//END Routes for Teas

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

module.exports = router;