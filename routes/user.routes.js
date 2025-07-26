import { Router } from "express";

const userRoute = Router();
/**
 * Get all users route
 */
userRoute.get('/', (req, res) => {
    res.send({
        title: 'GET all users',
    });
});
/**
 * Get Single User route
 */
userRoute.get('/:id', (req, res) => {
    res.send({
        title: 'GET user details',
    });
});
/**
 * Create new user route
 */
userRoute.post('/', (req, res) => {
    res.send({
        title: "Create new user",
    });
});
/**
 * update user route
 */
userRoute.put('/:id', (req, res) => {
    res.send({
        title: "Update user",
    });
});
/**
 * delete user route
 */
userRoute.delete('/:id', (req, res) => {
    res.send({
        title: "delete user",
    });
});

export default userRoute;