import express from 'express';
import { PORT } from './config/env.js';
import authRoute from './routes/auth.routes.js';
import userRoute from './routes/user.routes.js';
import subsctiptionRoute from './routes/subscription.routes.js';

const app = express();

/**
 * Route Setup
 */
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/subscriptions', subsctiptionRoute);

app.get('/', (req, res) => {
    res.send("Welcome to the Subscription Tracker API!");
});

app.listen(PORT, () => {
    console.log(`Subscription Tracker API is runing on http://localhost:${PORT}`);
});

export default app;