import { Router } from "express";

const authRoute = Router();
/**
 * User Signup route
 */
authRoute.post('/sign-up', (req, res) => {
    res.send({
        title: "sign up"
    });
});
/**
 * User Login route
 */
authRoute.post('/sign-in', (req, res) => {
    res.send({
        title: "sign in"
    });
});
/**
 * Logout user route
 */
authRoute.post('/sign-out', (req, res) => {
    res.send({
        title: "sign out"
    });
});

export default authRoute;