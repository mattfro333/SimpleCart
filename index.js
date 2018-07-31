const express =  require('express'),
      session = require('express-session'),
      bodyParser = require('body-parser'),
      passport =  require('passport');



const app = express();

app.use(bodyParser.json());



app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname));



app.listen(3000, function() {
  console.log('Connected on 3000')
})
