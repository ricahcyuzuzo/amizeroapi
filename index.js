const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3005

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.post('/send', (req, res) => {
    const accountSid = 'ACcd405ecd9eee6f7bfe63ce2e89834776'; 
    const authToken = '979d8780ac9123612f4db1f07030f2f8'; 
    const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({ 
         body: req.body.body, 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:' + req.body.phone
       }) 
      .then(message => {
        res.status(201).json({
            message
        })
      }) 
      .done();
});

app.listen(port, console.log('Working'));
