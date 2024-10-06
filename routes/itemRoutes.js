const express = require('express');
const router = express.Router();
const { getItems, createItem, updateItem } = require('../controllers/itemController');

router.get('/items', getItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.get("/test", (req, res)=>{
    res.send("Hello from the test route");
});
module.exports = router;
