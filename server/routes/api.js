const router  = require('express').Router();
const uuid = require('uuid/v1');

router.get('/transactionId', (req,res) => {
    res.send(uuid());
}); 

router.post('/scan', (req,res) => {
    console.log(req.body);
    res.send(req.body);
})

module.exports = router;