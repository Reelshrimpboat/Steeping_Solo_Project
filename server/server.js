
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const amazonPriceCheck = require('./modules/amazon-price-check');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const teasRouter = require('./routes/teas.router');
const usersTeasRouter = require('./routes/usersteas.router');
const reviewsRouter = require('./routes/reviews.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/teas', teasRouter);
app.use('/api/usersteas', usersTeasRouter);
app.use('/api/reviews', reviewsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

amazonPriceCheck('https://www.amazon.com/dp/B000E65OF6/');
amazonPriceCheck('https://www.amazon.com/dp/B000L8CB76/');