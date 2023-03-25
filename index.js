var express = require('express');
var router = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.get('/', function (req, res) {
  res.send({
    greet: 'Hello!',
    msg: 'Welcome to the Project Hero.',
  });
});

router(app);

app.listen(3000,()=>{
  console.log("server stated!!!")
})



module.exports = app;
