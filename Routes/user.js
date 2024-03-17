var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/send-otp',(req,res)=>{
    var otp= Math.floor(1000 + Math.random() * 9000).toString();
    res.send({
        status:true,
        otp:otp
    })
}
)

module.exports = router;
