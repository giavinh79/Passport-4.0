const router  = require('express').Router();
const uuid = require('uuid/v1');

router.get('/transactionId', (req,res) => {
    res.send(uuid());
}); 

module.exports = router;