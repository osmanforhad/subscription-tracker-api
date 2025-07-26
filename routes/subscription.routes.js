import { Router } from "express";

const subsctiptionRoute = Router();
/**
 * get all subscription route
 */
subsctiptionRoute.get('/', (req, res) => {
    res.send({
        title: "GET all subscription"
    });
});
/**
 * subscriober details route
 */
subsctiptionRoute.get('/:id', (req, res) => {
    res.send({
        title: "GET subscription details"
    });
});
/**
 * create subscription route
 */
subsctiptionRoute.post('/', (req, res) => {
    res.send({
        title: "craete subscription"
    });
});
/**
 * update subscription route
 */
subsctiptionRoute.put('/:id', (req, res) => {
    res.send({
        title: "update subscription"
    });
});
/**
 * delete subscription route
 */
subsctiptionRoute.delete('/:id', (req, res) => {
    res.send({
        title: "delete subscription"
    });
});
/**
 * get all user subscriptions route
 */
subsctiptionRoute.get('/user/:id', (req, res) => {
    res.send({
        title: "GET all user subscriptions"
    });
});
/**
 * cancel subscription route
 */
subsctiptionRoute.put('/:id/cancel', (req, res) => {
    res.send({
        title: "cancel subscription"
    });
});
/**
 * get all upcoming renewals route
 */
subsctiptionRoute.get('/upcoming-renewals', (req, res) => {
    res.send({
        title: "get upcoming renewals"
    });
});


export default subsctiptionRoute;